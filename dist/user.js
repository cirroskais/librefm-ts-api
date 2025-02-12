import { LastFM } from './base.js';
import { LastFMApiRequest } from './api-request.js';
export class LastFMUser extends LastFM {
    getFriends(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getFriends'
        })
            .send(callback);
    }
    getInfo(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getInfo'
        })
            .send(callback);
    }
    getLovedTracks(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getLovedTracks'
        })
            .send(callback);
    }
    getPersonalTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getPersonalTags'
        })
            .send(callback);
    }
    getRecentTracks(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getRecentTracks'
        })
            .send(callback);
    }
    getTopAlbums(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getTopAlbums'
        })
            .send(callback);
    }
    getTopArtists(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getTopArtists'
        })
            .send(callback);
    }
    getTopTags(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getTopTags'
        })
            .send(callback);
    }
    getTopTracks(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getTopTracks'
        })
            .send(callback);
    }
    getWeeklyAlbumChart(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getWeeklyAlbumChart'
        })
            .send(callback);
    }
    getWeeklyArtistChart(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getWeeklyArtistChart'
        })
            .send(callback);
    }
    getWeeklyChartList(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getWeeklyChartList'
        })
            .send(callback);
    }
    getWeeklyTrackChart(params, callback) {
        return new LastFMApiRequest()
            .set(params)
            .set({
            api_key: this.apiKey,
            method: 'user.getWeeklyTrackChart'
        })
            .send(callback);
    }
}
//# sourceMappingURL=user.js.map