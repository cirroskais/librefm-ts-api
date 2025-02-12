import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
export class LastFMAlbum extends LastFM {
    addTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'album.addTags',
            sk: this.sessionKey
        })
            .sign(this.secret)
            .send('POST', callback);
    }
    getInfo(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'album.getInfo'
        })
            .send(callback);
    }
    getTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'album.getTags'
        })
            .send(callback);
    }
    getTopTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'album.getTopTags'
        })
            .send(callback);
    }
    removeTag(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'album.removeTag',
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
            method: 'album.search'
        })
            .send(callback);
    }
}
//# sourceMappingURL=album.js.map