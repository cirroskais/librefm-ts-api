import { LastFM } from './base.js';
import { LastFMUnknownFunction, LastFMAlbumSearchParams, LastFMAlbumAddTagsParams, LastFMAlbumGetInfoParams, LastFMAlbumGetTagsParams, LastFMAlbumSearchResponse, LastFMAlbumGetInfoResponse, LastFMAlbumGetTagsResponse, LastFMAlbumGetTopTagsParams, LastFMAlbumRemoveLastFMTagParams } from './types.js';
export declare class LastFMAlbum extends LastFM {
    addTags(params: LastFMAlbumAddTagsParams, callback?: LastFMUnknownFunction): Promise<void>;
    getInfo(params: LastFMAlbumGetInfoParams, callback?: LastFMUnknownFunction): Promise<LastFMAlbumGetInfoResponse>;
    getTags(params: LastFMAlbumGetTagsParams, callback?: LastFMUnknownFunction): Promise<LastFMAlbumGetTagsResponse>;
    getTopTags(params: LastFMAlbumGetTopTagsParams, callback?: LastFMUnknownFunction): Promise<LastFMAlbumGetTagsResponse>;
    removeTag(params: LastFMAlbumRemoveLastFMTagParams, callback?: LastFMUnknownFunction): Promise<void>;
    search(params: LastFMAlbumSearchParams, callback?: LastFMUnknownFunction): Promise<LastFMAlbumSearchResponse>;
}
