import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
export class LastFMTag extends LastFM {
    getInfo(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'tag.getInfo'
        })
            .send(callback);
    }
    getSimilar(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'tag.getSimilar'
        })
            .send(callback);
    }
    getTopAlbums(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'tag.getTopAlbums'
        })
            .send(callback);
    }
    getTopArtists(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'tag.getTopArtists'
        })
            .send(callback);
    }
    getTopTags(callback) {
        return new LastFMApiRequest()
            .set({
            api_key: this.apiKey,
            method: 'tag.getTopTags'
        })
            .send(callback);
    }
    getTopTracks(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'tag.getTopTracks'
        })
            .send(callback);
    }
    getWeeklyChartList(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'tag.getWeeklyChartList'
        })
            .send(callback);
    }
}
//# sourceMappingURL=tag.js.map