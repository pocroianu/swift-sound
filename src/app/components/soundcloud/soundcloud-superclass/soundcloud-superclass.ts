import {MusicService} from '../../../services/music-service/music.service';
import {Track} from '../../../interfaces/Interfaces';

/**
 * This is the Soundcloud abstract class
 * Do not create an instance of this class
 * It is meant only for the use of inheritance
 */
export class SoundcloudSuperclass {

    /**
     *
     * @param _musicService
     */
    constructor(public _musicService: MusicService) {
    }


    /**
     * Plays the song based on the desired index
     */
    public playSong(track: Track): void {
        this._musicService.playTrack(track);
    }

    /**
     * Pauses the current song
     */
    public pause(): void {
        this._musicService.pauseCurrentTrack();
    }

}