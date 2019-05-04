import {Component, OnDestroy, OnInit} from '@angular/core';
import {Track} from '../../interfaces/Interfaces';
import {SoundCloudService} from '../../services/soundcloud-service/soundcloud.service';

@Component({
    selector: 'app-soundcloud',
    templateUrl: './soundcloud.component.html',
    styleUrls: ['./soundcloud.component.scss']
})
/**
 *
 */
export class SoundcloudComponent implements OnInit, OnDestroy {

    public defaultTracks: Array<Track>;
    public favouriteTracks: Array<Track>;

    /**
     *
     */
    constructor(private _soundcloudService: SoundCloudService) {
        this._soundcloudService.getDefaultTracks()
            .subscribe((content) => {
                this.defaultTracks = content;
            });
        /*this._soundcloudService.getFavouriteTracks()
            .subscribe((content) => {
                this.favouriteTracks = content;
            });*/
    }

    /**
     *
     */
    ngOnInit() {
        console.log('SoundcloudComponent initialized');
    }

    /**
     *
     */
    ngOnDestroy(): void {
        console.log('SoundcloudComponent destroyed');
    }

    /**
     * Plays the song based on the desired index
     */
    public playSong(index: number): void {
        this._soundcloudService.playSong(index);
    }

    /**
     * Pauses the current song
     */
    public pause(): void {
        this._soundcloudService.pause();
    }

}
