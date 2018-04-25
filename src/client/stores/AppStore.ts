import {Api} from '../services/Api';

export class AppStore {
    private api: Api;

    constructor() {
        this.api = new Api();
    }

    async checkFollowedPodcasts(urls: string[]) {
        return this.api.checkFollowedPodcasts(urls);
    }
}
