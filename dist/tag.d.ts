import { LastFM } from './base.js';
import { LastFMTagParams, LastFMTagGetTopParams, LastFMUnknownFunction, LastFMTagGetInfoParams, LastFMTagGetInfoResponse, LastFMTagGetSimilarResponse, LastFMTagGetTopTagsResponse, LastFMTagGetTopAlbumsResponse, LastFMTagGetTopTracksResponse, LastFMTagGetTopArtistsResponse, LastFMTagGetWeeklyChartListResponse } from './types.js';
export declare class LastFMTag extends LastFM {
    getInfo(params: LastFMTagGetInfoParams, callback?: LastFMUnknownFunction): Promise<LastFMTagGetInfoResponse>;
    getSimilar(params: LastFMTagParams, callback?: LastFMUnknownFunction): Promise<LastFMTagGetSimilarResponse>;
    getTopAlbums(params: LastFMTagGetTopParams, callback?: LastFMUnknownFunction): Promise<LastFMTagGetTopAlbumsResponse>;
    getTopArtists(params: LastFMTagGetTopParams, callback?: LastFMUnknownFunction): Promise<LastFMTagGetTopArtistsResponse>;
    getTopTags(callback?: LastFMUnknownFunction): Promise<LastFMTagGetTopTagsResponse>;
    getTopTracks(params: LastFMTagGetTopParams, callback?: LastFMUnknownFunction): Promise<LastFMTagGetTopTracksResponse>;
    getWeeklyChartList(params: LastFMTagParams, callback?: LastFMUnknownFunction): Promise<LastFMTagGetWeeklyChartListResponse>;
}
