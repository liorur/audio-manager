import {BaseDriver} from '../../../../../test/BaseDriver';
import SearchPodcast from './Search';
import * as httpAdapter from 'axios/lib/adapters/http';
import * as nock from 'nock';
import axios from 'axios';
import {itunesSearchDomain, itunesSearchPath} from '../../../services/ItunesSearchService';
import {endPoints} from '../../../services/Api';

axios.defaults.adapter = httpAdapter;

class SearchPodcastDriver extends BaseDriver {

    driverSettings = {
        componentClass: SearchPodcast,
        attachToDOM: true,
    };

    when = {
        created: () => this.render(),
        enterSearchString: (searchTerm: string) => {
            const input = this.get.searchInput();
            input.simulate('change', {target: {value: searchTerm}});
        },
        update: () => this.component.update(),
    };

    given = {
        searchResponse: response => {
            nock(itunesSearchDomain)
                .get(itunesSearchPath)
                .query(true)
                .reply(200, response, {'Access-Control-Allow-Origin': '*'});
        },
        checkFollowedResponse: response => {
            nock('http://localhost')
                .get(endPoints.podcastSearch)
                .query(true)
                .reply(200, response);
        },
    };

    get = {
        searchInput: () => this.getByDataHook('podcast-search'),
        searchResults: () => this.getByDataHook('podcast-search-result'),
        searchResultTitles: () => this.getByDataHook('podcast-search-result-title').map(titleNode => titleNode.text()),
        searchResultActions: () => this.getByDataHook('podcast-search-result-action').map(actionNode => actionNode.text()),
        searchResultTags: () => this.getByDataHook('podcast-search-result-tags').map(tagsNode => (tagsNode.text())),
        searchResultPostsCounts: () => this.getByDataHook('podcast-search-result-posts-count').map(acountNode => Number(acountNode.text())),
    };

    constructor(component?) {
        super(component);
    }

    cleanup() {
        super.cleanup();
    }
}

export default SearchPodcastDriver;
