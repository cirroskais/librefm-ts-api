import { createHash } from 'node:crypto';
import { parse, stringify } from 'node:querystring';
import { request } from 'node:https';
export class LastFMApiRequest {
    params = new Map();
    constructor() {
        this.params.set('format', 'json');
    }
    set(params) {
        Object.entries(params).forEach(([key, value]) => {
            if (typeof value !== 'undefined') {
                this.params.set(key, value);
            }
        });
        return this;
    }
    sign(secret) {
        const paramsObj = this.setParams();
        const paramsObjParsed = parse(stringify(paramsObj));
        const paramsStr = Array.from(Object.entries(paramsObjParsed))
            .filter(([key]) => key !== 'format' && key !== 'callback')
            .sort(([a], [b]) => {
            for (let i = 0; i < a.length || i < b.length; i++) {
                const charCodeA = a.charCodeAt(i) || 0;
                const charCodeB = b.charCodeAt(i) || 0;
                if (charCodeA < charCodeB) {
                    return -1;
                }
                if (charCodeA > charCodeB) {
                    return 1;
                }
            }
            return 0;
        })
            .map(param => param.join(''))
            .join('');
        this.params.set('api_sig', createHash('md5')
            .update(paramsStr + secret)
            .digest('hex'));
        return this;
    }
    send(method, callback) {
        callback = this.getCallback(method, callback);
        method = this.getMethod(method);
        if (this.params.has('callback')) {
            this.params.delete('callback');
        }
        const paramsObj = this.setParams();
        const paramsStr = stringify(paramsObj);
        const options = this.getOptions(method, paramsStr);
        const LastFMapiRequest = new Promise((resolve, reject) => {
            const httpRequest = request(options, httpResponse => {
                let data = '';
                httpResponse.setEncoding('utf8');
                httpResponse.on('data', chunk => (data += chunk));
                httpResponse.on('end', () => resolve(data));
                httpResponse.on('error', err => reject(err));
            });
            httpRequest.on('error', err => reject(err));
            if (method === 'POST') {
                httpRequest.write(paramsStr);
            }
            httpRequest.end();
        }).then((response) => {
            let data;
            try {
                data = JSON.parse(response);
            }
            catch (err) {
                console.log(response);
                throw new Error(`lastfm-ts-api: Unable to parse LastFM API response to JSON. API response is ${err}`);
            }
            if (data?.error) {
                console.log(response, paramsStr);
                throw new Error(`lastfm-ts-api: ${data?.message ?? 'LastFM API returned an error.'}`);
            }
            return data;
        });
        if (callback && typeof callback === 'function') {
            return LastFMapiRequest.then(data => callback(null, data), err => callback(err, null));
        }
        return LastFMapiRequest;
    }
    setParams() {
        const result = {};
        this.params.forEach((value, key) => {
            if (typeof value !== 'undefined') {
                result[key] = value;
            }
        });
        return result;
    }
    getCallback(method, callback) {
        return callback === undefined
            ? typeof method === 'function'
                ? method
                : undefined
            : typeof callback === 'function'
                ? callback
                : undefined;
    }
    getMethod(method) {
        return typeof method === 'string' ? method : undefined;
    }
    getOptions(method, params) {
        const options = {
            hostname: 'libre.fm',
            path: '/2.0/'
        };
        if (method === 'POST') {
            options.method = 'POST';
            options.headers = {
                'Content-Length': Buffer.byteLength(params),
                'Content-Type': 'application/x-www-form-urlencoded'
            };
        }
        else {
            options.path += `?${params}`;
        }
        return options;
    }
}
export default LastFMApiRequest;
//# sourceMappingURL=api-request.js.map