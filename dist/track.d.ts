import { LastFM } from './base.js';
import { LastFMTrackParams, LastFMUnknownFunction, LastFMTrackSearchParams, LastFMTrackAddTagsParams, LastFMTrackGetInfoParams, LastFMTrackGetTagsParams, LastFMTrackScrobbleParams, LastFMTrackSearchResponse, LastFMTrackGetInfoResponse, LastFMTrackGetTagsResponse, LastFMTrackRemoveTagParams, LastFMTrackGetSimilarParams, LastFMTrackGetTopTagsParams, LastFMTrackScroblleResponse, LastFMTrackGetSimilarResponse, LastFMTrackGetTopTagsResponse, LastFMUpdateNowPlayingResponse, LastFMTrackGetCorrectionResponse, LastFMTrackUpdateNowPlayingParams } from './types.js';
export declare class LastFMTrack extends LastFM {
    addTags(params: LastFMTrackAddTagsParams, callback?: LastFMUnknownFunction): Promise<void>;
    getCorrection(params: LastFMTrackParams, callback?: LastFMUnknownFunction): Promise<LastFMTrackGetCorrectionResponse>;
    getInfo(params: LastFMTrackGetInfoParams, callback?: LastFMUnknownFunction): Promise<LastFMTrackGetInfoResponse>;
    getSimilar(params: LastFMTrackGetSimilarParams, callback?: LastFMUnknownFunction): Promise<LastFMTrackGetSimilarResponse>;
    getTags(params: LastFMTrackGetTagsParams, callback?: LastFMUnknownFunction): Promise<LastFMTrackGetTagsResponse>;
    getTopTags(params: LastFMTrackGetTopTagsParams, callback?: LastFMUnknownFunction): Promise<LastFMTrackGetTopTagsResponse>;
    love(params: LastFMTrackParams, callback?: LastFMUnknownFunction): Promise<void>;
    removeTag(params: LastFMTrackRemoveTagParams, callback?: LastFMUnknownFunction): Promise<void>;
    scrobble(params: LastFMTrackScrobbleParams, callback?: LastFMUnknownFunction): Promise<LastFMTrackScroblleResponse>;
    scrobbleMany(paramsArr: LastFMTrackScrobbleParams[], callback?: LastFMUnknownFunction): Promise<LastFMTrackScroblleResponse>;
    search(params: LastFMTrackSearchParams, callback?: LastFMUnknownFunction): Promise<LastFMTrackSearchResponse>;
    unlove(params: LastFMTrackParams, callback?: LastFMUnknownFunction): Promise<void>;
    updateNowPlaying(params: LastFMTrackUpdateNowPlayingParams, callback?: LastFMUnknownFunction): Promise<LastFMUpdateNowPlayingResponse>;
}
