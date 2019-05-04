import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpotifyComponent} from './spotify.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path: 'spotify',
        component: SpotifyComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class SpotifyModule {
}
