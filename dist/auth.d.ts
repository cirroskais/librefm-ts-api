import { LastFM } from './base.js';
import { LastFMUnknownFunction, LastFMAuthSessionResponse, LastFMAuthGetSessionParams, LastFMAuthGetTokenResponse, LastFMAuthGetMobileSessionParams } from './types.js';
export declare class LastFMAuth extends LastFM {
    getMobileSession(params: LastFMAuthGetMobileSessionParams, callback?: LastFMUnknownFunction): Promise<LastFMAuthSessionResponse>;
    getSession(params: LastFMAuthGetSessionParams, callback?: LastFMUnknownFunction): Promise<LastFMAuthSessionResponse>;
    getToken(callback?: LastFMUnknownFunction): Promise<LastFMAuthGetTokenResponse>;
}
