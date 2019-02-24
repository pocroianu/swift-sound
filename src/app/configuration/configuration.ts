import {Routes} from '@angular/router';

/**
 *
 */
export class Configuration{

    public static AppRoutes: Routes = [
        {
            path        : 'home',
            loadChildren: '../components/home/home.module#HomeModule'
        },
        {
            path        : 'stream',
            loadChildren: '../components/stream/stream.module#StreamModule'
        },
        {
            path        : 'library',
            loadChildren: '../components/library/library.module#LibraryModule'
        }
    ];
}


