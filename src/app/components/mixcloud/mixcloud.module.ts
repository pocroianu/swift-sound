import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MixcloudComponent} from './mixcloud.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path: 'mixcloud',
        component: MixcloudComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class MixcloudModule {
}
