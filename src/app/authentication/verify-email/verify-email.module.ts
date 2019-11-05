import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {VerfiyEmailComponent} from "./verify-email.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
 
const loginRoutes: Routes = [
  { path: '', component: VerfiyEmailComponent }
];


@NgModule({
  declarations: [
    VerfiyEmailComponent
  ],

  imports: [
    CommonModule,
    

    FormsModule,
  

    // ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ],

  providers: [],
  exports: []
})

export class VerfiyEmailModule {

}
