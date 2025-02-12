import { LastFM } from './base.js';
import { LastFMArtistParams, LastFMUnknownFunction, LastFMArtistSearchParams, LastFMArtistAddTagsParams, LastFMArtistGetInfoParams, LastFMArtistGetTagsParams, LastFMArtistSearchResponse, LastFMArtistGetInfoResponse, LastFMArtistGetTagsResponse, LastFMArtistGetSimilarParams, LastFMArtistGetTopTagsParams, LastFMArtistGetSimilarResponse, LastFMArtistGetTopAlbumsParams, LastFMArtistGetTopTagsResponse, LastFMArtistGetTopTracksParams, LastFMArtistGetTopAlbumsResponse, LastFMArtistGetTopTracksResponse, LastFMArtistGetCorrectionResponse, LastFMArtistRemoveLastFMTagParams } from './types.js';
export declare class LastFMArtist extends LastFM {
    addTags(params: LastFMArtistAddTagsParams, callback?: LastFMUnknownFunction): Promise<void>;
    getCorrection(params: LastFMArtistParams, callback?: LastFMUnknownFunction): Promise<LastFMArtistGetCorrectionResponse>;
    getInfo(params: LastFMArtistGetInfoParams, callback?: LastFMUnknownFunction): Promise<LastFMArtistGetInfoResponse>;
    getSimilar(params: LastFMArtistGetSimilarParams, callback?: LastFMUnknownFunction): Promise<LastFMArtistGetSimilarResponse>;
    getTags(params: LastFMArtistGetTagsParams, callback?: LastFMUnknownFunction): Promise<LastFMArtistGetTagsResponse>;
    getTopAlbums(params: LastFMArtistGetTopAlbumsParams, callback?: LastFMUnknownFunction): Promise<LastFMArtistGetTopAlbumsResponse>;
    getTopTags(params: LastFMArtistGetTopTagsParams, callback?: LastFMUnknownFunction): Promise<LastFMArtistGetTopTagsResponse>;
    getTopTracks(params: LastFMArtistGetTopTracksParams, callback?: LastFMUnknownFunction): Promise<LastFMArtistGetTopTracksResponse>;
    removeTag(params: LastFMArtistRemoveLastFMTagParams, callback?: LastFMUnknownFunction): Promise<void>;
    search(params: LastFMArtistSearchParams, callback?: LastFMUnknownFunction): Promise<LastFMArtistSearchResponse>;
}
