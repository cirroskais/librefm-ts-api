import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
export class LastFMAuth extends LastFM {
    getMobileSession(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'auth.getMobileSession'
        })
            .sign(this.secret)
            .send('POST', callback);
    }
    getSession(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'auth.getSession'
        })
            .sign(this.secret)
            .send(callback);
    }
    getToken(callback) {
        return new LastFMApiRequest()
            .set({
            api_key: this.apiKey,
            method: 'auth.getToken'
        })
            .sign(this.secret)
            .send(callback);
    }
}
//# sourceMappingURL=auth.js.map