import {Routes} from '@angular/router';

/**
 *
 */
export class Configuration {

    /**
     * This will set the main app routes
     */
    public static AppRoutes: Routes = [
        {
            path: 'soundcloud-home',
            loadChildren: '../components/soundcloud/soundcloud-home/soundcloud-home.module#SoundcloudHomeModule'
        },
        {
            path: 'soundcloud-favourites',
            loadChildren: '../components/soundcloud/soundcloud-favourites/soundcloud-favourites.module#SoundcloudFavouritesModule'
        },
        {
            path: 'spotify',
            loadChildren: '../components/spotify/spotify.module#SpotifyModule'
        },
        {
            path: 'mixcloud',
            loadChildren: '../components/mixcloud/mixcloud.module#MixcloudModule'
        },
        {
            path: 'bandcamp',
            loadChildren: '../components/bandcamp/bandcamp.module#BandcampModule'
        }
    ];
}


