import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
export class LastFMTrack extends LastFM {
    addTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.addTags',
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
            method: 'track.getCorrection'
        })
            .send(callback);
    }
    getInfo(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.getInfo'
        })
            .send(callback);
    }
    getSimilar(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.getSimilar'
        })
            .send(callback);
    }
    getTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.getTags'
        })
            .send(callback);
    }
    getTopTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.getTopTags'
        })
            .send(callback);
    }
    love(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.love',
            sk: this.sessionKey
        })
            .sign(this.secret)
            .send('POST', callback);
    }
    removeTag(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.removeTag',
            sk: this.sessionKey
        })
            .sign(this.secret)
            .send('POST', callback);
    }
    scrobble(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.scrobble',
            sk: this.sessionKey
        })
            .sign(this.secret)
            .send('POST', callback);
    }
    scrobbleMany(paramsArr, callback) {
        const params = {};
        paramsArr.forEach((paramsObj, i) => Object.entries(paramsObj).forEach(([name, value]) => (params[`${name}[${i}]`] = value)));
        return this.scrobble(params, callback);
    }
    search(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.search'
        })
            .send(callback);
    }
    unlove(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.unlove',
            sk: this.sessionKey
        })
            .sign(this.secret)
            .send('POST', callback);
    }
    updateNowPlaying(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'track.updateNowPlaying',
            sk: this.sessionKey
        })
            .sign(this.secret)
            .send('POST', callback);
    }
}
//# sourceMappingURL=track.js.map