import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { GalleryComponent } from './gallery.component';
const loginRoutes: Routes = [
  { path: '', component: GalleryComponent }
];


@NgModule({
  declarations: [
    GalleryComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
   
    RouterModule.forChild(loginRoutes)
  ],

  providers: [],
  exports: []
})

export class galleryModule {

}
