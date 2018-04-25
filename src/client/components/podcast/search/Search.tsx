import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {AppStore} from '../../../stores/appStore';
import {itunesSearchService} from '../../../services/ItunesSearchService';
import * as debounce from 'debounce-promise';

export interface ISearchPodcastProps {
    appStore?: AppStore;
}

export interface ISearchPodcastState {
    searchResults?: Array<{ title: string; url: string; count: number, image: string, followed: boolean, tags: string[] }>;
}

@inject('appStore') @observer
export default class SearchPodcast extends React.Component<ISearchPodcastProps, ISearchPodcastState> {

    private search;

    constructor(props) {
        super(props);
        this.search = debounce(itunesSearchService, 1500);
        this.state = {};
    }

    render() {
        const {searchResults} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box-header with-border">
                            <h3 className="box-title">Input Addon</h3>
                        </div>
                        <div className="box-body">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fas fa-link"></i></span>
                                <input data-hook="podcast-search" placeholder="Search for podcast" type="text" className="form-control" onChange={event => this.fetchPodacstResults(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        {searchResults && searchResults.length &&
                        <div className="box-body table-responsive">
                            <table className="table table-bordered table-striped dataTable table-hover">
                                <tbody>

                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Posts</th>
                                    <th>Actions</th>
                                    <th>Tags</th>
                                </tr>
                                {searchResults && searchResults.map((result, index) =>
                                    <tr data-hook="podcast-search-result" key={index}>
                                        <td><img src={result.image}></img></td>
                                        <td data-hook="podcast-search-result-title" className="align-middle" >{result.title}</td>
                                        <td data-hook="podcast-search-result-posts-count" >{result.count}</td>
                                        <td data-hook="podcast-search-result-action" >
                                            {result.followed ?
                                                <button type="button" className="btn btn-info">Manage</button> :
                                                <button type="button" className="btn btn-success btn-sm">Follow</button>}
                                        </td>
                                        <td data-hook="podcast-search-result-tags" ><div>{result.tags.map(tag => <span key={tag} className="label label-primary">{tag}</span>)}&nbsp;</div></td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>}
                    </div>
                </div>
            </div>);
    }

    private async fetchPodacstResults(searchTerm) {
        const res = await this.search(searchTerm);
        const followedPodcasts = await this.props.appStore.checkFollowedPodcasts(res.results.map(item => item.feedUrl));
        const searchResults = res.results.map(item => {
            return ({
                title: item.collectionName,
                image: item.artworkUrl100,
                url: item.feedUrl,
                count: item.trackCount,
                followed: followedPodcasts[item.feedUrl],
                tags: item.genres,
            });
        });
        this.setState({searchResults});
    }
}

// "react-autobind": "^1.0.6",
// "react-test-renderer": "^15.5.4",
// "react-test-wrappers": "^1.0.15",
//
// "mobx-react": "^4.4.3",
// "mobx-react-devtools": "^4.2.11",
// "prop-types": "^15.6.1",
// "react-hot-loader": "^3.0.0-beta.7",
// "react-i18next": "^6.0.5",
// "react-router-dom": "^4.2.2",
// "svg2react-icon": "^1.0.22",
// "wix-style-react": "^3.0.0"
