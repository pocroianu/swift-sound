import {Component, OnDestroy, OnInit} from '@angular/core';
import {SoundcloudSuperclass} from '../soundcloud-superclass/soundcloud-superclass';
import {SoundCloudService} from '../../../services/soundcloud-service/soundcloud.service';
import {Track} from '../../../interfaces/Interfaces';

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

    public favouriteTracks:Array<Track>;

    /**
     * @param _soundcloudService
     */
    constructor(public _soundcloudService : SoundCloudService) {
        super(_soundcloudService);
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
