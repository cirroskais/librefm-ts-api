import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
export class LastFMLibrary extends LastFM {
    getArtists(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'library.getArtists'
        })
            .send(callback);
    }
}
//# sourceMappingURL=library.js.map