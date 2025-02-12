import { LastFM } from './base.js';
import { LastFMUnknownFunction, LastFMGeoGetTopTracksParams, LastFMGeoGetTopArtistsParams, LastFMGeoGetTopTracksResponse, LastFMGeoGetTopArtistsResponse } from './types.js';
export declare class LastFMGeo extends LastFM {
    getTopArtists(params: LastFMGeoGetTopArtistsParams, callback?: LastFMUnknownFunction): Promise<LastFMGeoGetTopArtistsResponse>;
    getTopTracks(params: LastFMGeoGetTopTracksParams, callback?: LastFMUnknownFunction): Promise<LastFMGeoGetTopTracksResponse>;
}
