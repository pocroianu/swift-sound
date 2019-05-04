import {SoundCloudService} from '../../../services/soundcloud-service/soundcloud.service';

/**
 * This is the Soundcloud abstract class
 * Do not create an instance of this class
 * It is meant only for the use of inheritance
 */
export class SoundcloudSuperclass {

    /**
     *
     * @param _soundcloudService
     */
    constructor(public _soundcloudService: SoundCloudService) {
    }


    /**
     * Plays the song based on the desired index
     */
    public playSong(track_url: string): void {
        this._soundcloudService.playSong(track_url);
    }

    /**
     * Pauses the current song
     */
    public pause(): void {
        this._soundcloudService.pause();
    }

}