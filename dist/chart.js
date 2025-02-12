import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
export class LastFMChart extends LastFM {
    getTopArtists(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'chart.getTopArtists'
        })
            .send(callback);
    }
    getTopTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'chart.getTopTags'
        })
            .send(callback);
    }
    getTopTracks(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'chart.getTopTracks'
        })
            .send(callback);
    }
}
//# sourceMappingURL=chart.js.map