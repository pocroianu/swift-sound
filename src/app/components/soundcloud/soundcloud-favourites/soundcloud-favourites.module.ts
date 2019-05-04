import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SoundcloudFavouritesComponent} from './soundcloud-favourites.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path: 'soundcloud-favourites',
        component: SoundcloudFavouritesComponent
    }
];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class SoundcloudFavouritesModule {
}
