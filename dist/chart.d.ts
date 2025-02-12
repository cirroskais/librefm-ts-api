import { LastFM } from './base.js';
import { LastFMChartParams, LastFMUnknownFunction, LastFMChartGetTopTagsResponse, LastFMChartGetTopTracksResponse, LastFMChartGetTopArtistsResponse } from './types.js';
export declare class LastFMChart extends LastFM {
    getTopArtists(params: LastFMChartParams, callback?: LastFMUnknownFunction): Promise<LastFMChartGetTopArtistsResponse>;
    getTopTags(params: LastFMChartParams, callback?: LastFMUnknownFunction): Promise<LastFMChartGetTopTagsResponse>;
    getTopTracks(params: LastFMChartParams, callback?: LastFMUnknownFunction): Promise<LastFMChartGetTopTracksResponse>;
}
