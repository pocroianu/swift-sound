import {Component, OnDestroy, OnInit} from '@angular/core';
import {Track} from '../../../interfaces/Interfaces';
import {SoundCloudService} from '../../../services/soundcloud-service/soundcloud.service';
import {SoundcloudSuperclass} from '../soundcloud-superclass/soundcloud-superclass';
import {MusicService} from '../../../services/music-service/music.service';

@Component({
    selector: 'app-soundcloud-home',
    templateUrl: './soundcloud-home.component.html',
    styleUrls: ['./soundcloud-home.component.scss']
})

/**
 *
 */
export class SoundcloudHomeComponent extends SoundcloudSuperclass
    implements OnInit, OnDestroy {

    public defaultTracks: Array<Track>;

    /**
     * @param _musicService
     * @param _soundcloudService
     */
    constructor(public _musicService:MusicService,
        public _soundcloudService : SoundCloudService) {
        super(_musicService);
        this._soundcloudService.getDefaultTracks()
            .subscribe((content) => {
                this.defaultTracks = content;
            });
    }

    /**
     *
     */
    ngOnInit() {
        console.log('SoundcloudHomeComponent initialized');
    }

    /**
     *
     */
    ngOnDestroy(): void {
        console.log('SoundcloudHomeComponent destroyed');
    }

}
