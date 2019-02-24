import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibraryComponent} from './library.component';
import {RouterModule} from '@angular/router';


const routes = [
    {
        path: 'library',
        component: LibraryComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
  ]
})
export class LibraryModule { }
