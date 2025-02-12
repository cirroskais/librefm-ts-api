import LastFMApiRequest from './api-request.js';
import { LastFM } from './base.js';
export class LastFMArtist extends LastFM {
    addTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.addTags',
            sk: this.sessionKey
        })
            .sign(this.secret)
            .send('POST', callback);
    }
    getCorrection(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.getCorrection'
        })
            .send(callback);
    }
    getInfo(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.getInfo'
        })
            .send(callback);
    }
    getSimilar(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.getSimilar'
        })
            .send(callback);
    }
    getTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.getTags'
        })
            .send(callback);
    }
    getTopAlbums(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.getTopAlbums'
        })
            .send(callback);
    }
    getTopTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.getTopTags'
        })
            .send(callback);
    }
    getTopTracks(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.getTopTracks'
        })
            .send(callback);
    }
    removeTag(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.removeTag',
            sk: this.sessionKey
        })
            .sign(this.secret)
            .send('POST', callback);
    }
    search(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'artist.search'
        })
            .send(callback);
    }
}
//# sourceMappingURL=artist.js.map