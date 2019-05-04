import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SoundcloudComponent} from './soundcloud.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path: 'soundcloud',
        component: SoundcloudComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class SoundcloudModule {
}
