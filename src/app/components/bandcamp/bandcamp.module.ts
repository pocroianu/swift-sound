import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BandcampComponent} from './bandcamp.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path: 'bandcamp',
        component: BandcampComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class BandcampModule {
}
