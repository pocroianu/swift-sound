import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {SoundcloudSuperclass} from '../soundcloud-superclass/soundcloud-superclass';
import {SoundCloudService} from '../../../services/soundcloud-service/soundcloud.service';
import {Track} from '../../../interfaces/Interfaces';
import {MusicService} from '../../../services/music-service/music.service';

@Component({
    selector: 'app-soundcloud-favourites',
    templateUrl: './soundcloud-favourites.component.html',
    styleUrls: ['./soundcloud-favourites.component.scss']
})


/**
 *
 */
export class SoundcloudFavouritesComponent extends SoundcloudSuperclass
    implements OnInit, OnDestroy {

    @Output() playUrl = new EventEmitter();
    public favouriteTracks: Array<Track>;

    /**
     * @param _soundcloudService
     * @param _musicService
     */
    constructor(public _musicService: MusicService,
                public _soundcloudService: SoundCloudService) {
        super(_musicService);
        this._soundcloudService.getFavouriteTracks()
            .subscribe((content) => {
                this.favouriteTracks = content;
            });
    }

    /**
     *
     */
    ngOnInit() {
        console.log('SoundcloudFavouritesComponent initialized');
    }

    /**
     *
     */
    ngOnDestroy(): void {
        console.log('SoundcloudFavouritesComponent destroyed');
    }
}
