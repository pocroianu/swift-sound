import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Subject} from 'rxjs';
import {Track} from '../../interfaces/Interfaces';
import {SoundCloudService} from '../soundcloud-service/soundcloud.service';


@Injectable()
export class MusicService {

    public audio: HTMLAudioElement;
    public currentTrack = new Subject<Track>();

    /**
     *
     * @param _soundcloudService
     */
    constructor(private _soundcloudService: SoundCloudService) {
        this.audio = new Audio();
        console.log('MusicService initialized');
    }

    /**
     * Loads the track url into hte currentTrack audio source so that it can be played
     * @param url
     */
    public loadTrackUrlIntoAudioSource(url) {
        this.audio.src = this._soundcloudService.prepareUrl(url);
        this.audio.load();
    }

    /**
     * Plays the desired track using a track url
     * @param url
     */
    public playTrackUsingUrl(url) {
        this.loadTrackUrlIntoAudioSource(url);
        this.audio.play().then(() => {
            console.log('Playing');
        });
    }

    /**
     * Continues playing the current song
     */
    public playCurrentTrack():void{
        this.audio.play().then(()=>{
            console.log('Playing');
        });
    }

    /**
     * Pauses the current song that is playing
     */
    public pauseCurrentTrack(): void {
        this.audio.pause();
        console.log('Paused');
    }

    public stop():void{
        this.audio.pause();
        this.audio.currentTime = 0;
        console.log('Stopped');
    }

    /**
     *
     * @param track
     */
    public playTrack(track: Track) {
        this.currentTrack.next(track);
        this.playTrackUsingUrl(track.stream_url);
    }

    /**
     * Request for a playlist via Soundcloud using a client id
     */
    public getPlaylistTracks() {
        return this._soundcloudService.get('https://api.soundcloud.com/playlists/209262931', true)
            .map(res => res.json())
            .map(data => data.tracks);
    }

    /**
     * Returns a random track from the current tracks
     * @param tracks
     */
    public randomTrack = tracks => {
        const trackLength = tracks.length;
        // Pick a random number
        const randomNumber = Math.floor((Math.random() * trackLength) + 1);
        // Return a random track
        return tracks[randomNumber];
    };

    /**
     *
     * @param seconds
     */
    public formatTime = seconds => {
        let minutes: any = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : '0' + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : '0' + seconds;
        return minutes + ':' + seconds;
    };

    /**
     *
     * @param value
     */
    public findTracks(value) {
        return this._soundcloudService.get(`${this._soundcloudService.prepareUrl('https://api.soundcloud.com/tracks')}&q=${value}`, false)
            .debounceTime(300)
            .distinctUntilChanged()
            .map(res => res.json());
    }

    /**
     *
     * @param url
     */
    public xlArtwork = url => url.replace(/large/, 't500x500');

}
