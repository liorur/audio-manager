import * as eventually from 'wix-eventually';
import {radiolabItunesSearchResponse} from '../../../../../test/mockResponses';
import SearchPodcastDriver from './Search.driver';

describe('Podacst search', () => {
    let driver: SearchPodcastDriver;

    beforeEach(() => {
        driver = new SearchPodcastDriver();
    });

    describe('Search podcast page', () => {
        beforeEach(async () => {
            await driver.when.created();
        });

        it('should display results while typing in the search box and  display follow or mange action buttons for each item', async () => {
            const searchTerm = 'Radiolab';
            driver.given.searchResponse(radiolabItunesSearchResponse);
            driver.given.checkFollowedResponse({'http://feeds.wnyc.org/radiolab': true});
            driver.when.enterSearchString(searchTerm);
            await eventually(() => {
                driver.when.update();
                expect(driver.get.searchResults().length).toEqual(9);
            });
            expect(driver.get.searchResultTitles()[0]).toEqual('Radiolab');
            expect(driver.get.searchResultActions()[0]).toEqual('Manage');
            expect(driver.get.searchResultActions()[1]).toEqual('Follow');
            expect(driver.get.searchResultPostsCounts()[0]).toEqual(149);
            expect(driver.get.searchResultTags()[0]).toContain('Natural Sciences');
        });
    });
});
