import { LastFM } from './base.js';
import { LastFMUnknownFunction, LastFMLibraryGetArtistsParams, LastFMLibraryGetArtistsResponse } from './types.js';
export declare class LastFMLibrary extends LastFM {
    getArtists(params: LastFMLibraryGetArtistsParams, callback?: LastFMUnknownFunction): Promise<LastFMLibraryGetArtistsResponse>;
}
