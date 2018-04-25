import * as buildUrl from 'build-url';
import axios from 'axios';

export const itunesSearchDomain = 'https://itunes.apple.com';
export const itunesSearchPath = '/search';

export const itunesSearchService = (query, limit = 20) => {
    const url = buildUrl(`${itunesSearchDomain}${itunesSearchPath}`, {
        queryParams: {
            term: query,
            entity: 'podcast',
            media: 'podcast',
            limit,
        },
    });
    return axios.get(url, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    }).then(res => {
        return res.data;
    });
};
