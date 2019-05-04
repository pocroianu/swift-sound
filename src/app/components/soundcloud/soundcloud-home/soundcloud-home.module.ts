import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SoundcloudHomeComponent} from './soundcloud-home.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path: 'soundcloud-home',
        component: SoundcloudHomeComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class SoundcloudHomeModule {
}
