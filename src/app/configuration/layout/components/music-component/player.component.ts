import {Component, OnInit} from '@angular/core';
import {MusicService} from '../../../../services/music-service/music.service';
import {Track} from '../../../../interfaces/Interfaces';
import {Subscription} from 'rxjs';

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})

/**
 *
 */
export class PlayerComponent implements OnInit {
    title;
    position;
    elapsed;
    duration;
    paused = true;
    tracks: any[] = [];
    filteredTracks: any[] = [];
    backgroundStyle;

    /**In this we will store the current track that is playing */
    private currentTrack: Track;
    /**In here we will store all the subscribtions received from services */
    private subscription: Subscription;

    /**
     *
     * @param _musicService
     */
    constructor(private _musicService: MusicService) {
    }

    /**
     *
     */
    ngOnInit() {
        this._musicService.getPlaylistTracks().subscribe(tracks => {
            this.tracks = tracks;
            this.onRandomButtonPressed();
        });
        this.subscription = this._musicService.currentTrack.subscribe(track => {
            this.currentTrack = track;
            this.title = this.currentTrack.title;
        });
        this._musicService.audio.onended = this.onTrackEnded.bind(this);
        this._musicService.audio.ontimeupdate = this.onTimeUpdate.bind(this);
    }

    /**
     *
     * @param e
     */
    public onTrackEnded(e) {
        this.onRandomButtonPressed();
    }

    /**
     *
     */
    public onRandomButtonPressed() {
        const randomTrack = this._musicService.randomTrack(this.tracks);
        this._musicService.currentTrack.next(randomTrack);
        this._musicService.playTrackUsingUrl(randomTrack.stream_url);
        this.backgroundStyle = this.composeBackgroundStyle(randomTrack.artwork_url);
    }

    /**
     *
     */
    public onPlayPauseButtonPressed() {
        if (this._musicService.audio.paused) {
            this.paused = true;
            this._musicService.playCurrentTrack();
        } else {
            this.paused = false;
            this._musicService.pauseCurrentTrack();
        }
    }

    /**
     * Stops the current track that is playing
     */
    public onStopButtonPressed() {
        this._musicService.stop();
        this.paused = false;
    }

    /**
     *
     */
    public onBackwardButtonPressed() {
        let elapsed = this._musicService.audio.currentTime;
        console.log(elapsed);
        if (elapsed >= 5) {
            this._musicService.audio.currentTime = elapsed - 5;
        }
    }

    /**
     *
     */
    public onForwardButtonPressed() {
        let elapsed = this._musicService.audio.currentTime;
        const duration = this._musicService.audio.duration;
        if (duration - elapsed >= 5) {
            this._musicService.audio.currentTime = elapsed + 5;
        }
    }

    /**
     *
     * @param e
     */
    public onTimeUpdate(e) {
        const elapsed = this._musicService.audio.currentTime;
        const duration = this._musicService.audio.duration;
        this.position = elapsed / duration;
        this.elapsed = this._musicService.formatTime(elapsed);
        this.duration = this._musicService.formatTime(duration);
    }

    /**
     *
     * @param payload
     */
    public onQuery(payload) {
        this._musicService.findTracks(payload).subscribe(tracks => {
            this.filteredTracks = tracks;
        });
    }

    /**
     *
     * @param track
     */
    public onTrackUpdate(track) {
        this._musicService.playTrackUsingUrl(track.stream_url);
        this.title = track.title;
        this.backgroundStyle = this.composeBackgroundStyle(track.artwork_url);
    }

    /**
     *
     * @param url
     */
    public composeBackgroundStyle(url) {
        return {
            width: '100%',
            height: '1000px',
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),   url(${this._musicService.xlArtwork(url)})`
        };
    }
}
