import { LastFM } from './base.js';
import { LastFMUserParams, LastFMUnknownFunction, LastFMUserGetTopParams, LastFMUserGetInfoResponse, LastFMUserGetWeeklyParams, LastFMUserGetFriendsParams, LastFMUserGetTopTagsParams, LastFMUserGetFriendsResponse, LastFMUserGetTopTagsResponse, LastFMUserGetLovedTracksParams, LastFMUserGetTopAlbumsResponse, LastFMUserGetTopTracksResponse, LastFMUserGetPersonalTagsParams, LastFMUserGetRecentTracksParams, LastFMUserGetTopArtistsResponse, LastFMUserGetLovedTracksResponse, LastFMUserGetPersonalTagsResponse, LastFMUserGetRecentTracksResponse, LastFMUserGetWeeklyChartListResponse, LastFMUserGetWeeklyAlbumChartResponse, LastFMUserGetWeeklyTrackChartResponse, LastFMUserGetWeeklyArtistChartResponse } from './types.js';
export declare class LastFMUser extends LastFM {
    getFriends(params: LastFMUserGetFriendsParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetFriendsResponse>;
    getInfo(params: LastFMUserParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetInfoResponse>;
    getLovedTracks(params: LastFMUserGetLovedTracksParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetLovedTracksResponse>;
    getPersonalTags(params: LastFMUserGetPersonalTagsParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetPersonalTagsResponse>;
    getRecentTracks(params: LastFMUserGetRecentTracksParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetRecentTracksResponse>;
    getTopAlbums(params: LastFMUserGetTopParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetTopAlbumsResponse>;
    getTopArtists(params: LastFMUserGetTopParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetTopArtistsResponse>;
    getTopTags(params: LastFMUserGetTopTagsParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetTopTagsResponse>;
    getTopTracks(params: LastFMUserGetTopParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetTopTracksResponse>;
    getWeeklyAlbumChart(params: LastFMUserGetWeeklyParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetWeeklyAlbumChartResponse>;
    getWeeklyArtistChart(params: LastFMUserGetWeeklyParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetWeeklyArtistChartResponse>;
    getWeeklyChartList(params: LastFMUserParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetWeeklyChartListResponse>;
    getWeeklyTrackChart(params: LastFMUserGetWeeklyParams, callback?: LastFMUnknownFunction): Promise<LastFMUserGetWeeklyTrackChartResponse>;
}
