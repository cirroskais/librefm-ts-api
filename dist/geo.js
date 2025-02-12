import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
export class LastFMGeo extends LastFM {
    getTopArtists(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'geo.getTopArtists'
        })
            .send(callback);
    }
    getTopTracks(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'geo.getTopTracks'
        })
            .send(callback);
    }
}
//# sourceMappingURL=geo.js.map