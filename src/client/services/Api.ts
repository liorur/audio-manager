import axios from 'axios';
import * as buildUrl from 'build-url';

const baseUrl = '/api/';
export const endPoints = {
    podcastSearch: `${baseUrl}podcast_search`,
};

export class Api {
    async checkFollowedPodcasts(podcastsUrls: string[]) {
        const url = buildUrl(endPoints.podcastSearch, {
            queryParams: {
                query: podcastsUrls,
            },
        });
        return axios.get(url).then(res => {
            return res.data;
        });
    }
}
