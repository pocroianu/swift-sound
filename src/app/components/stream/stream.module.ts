import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {StreamComponent} from './stream.component';


const routes = [
    {
        path: 'stream',
        component: StreamComponent
    }
];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class StreamModule {
}
