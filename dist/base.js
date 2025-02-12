export class LastFM {
    apiKey;
    secret;
    sessionKey;
    constructor(apiKey, secret, sessionKey) {
        if (typeof apiKey !== 'string') {
            throw new TypeError('apiKey must be of type string');
        }
        this.apiKey = apiKey;
        if (secret !== undefined) {
            if (typeof secret !== 'string') {
                throw new TypeError('secret must be of type string');
            }
            this.secret = secret;
        }
        if (sessionKey !== undefined) {
            if (typeof sessionKey !== 'string') {
                throw new TypeError('sessionKey must be of type string');
            }
            this.sessionKey = sessionKey;
        }
    }
}
//# sourceMappingURL=base.js.map