import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { UserMainDashboardComponent } from './user-main-dashboard.component';
const userRoutes: Routes = [
  { path: '', component: UserMainDashboardComponent }
];


@NgModule({
  declarations: [
    UserMainDashboardComponent
  ],

  imports: [
    CommonModule,
   

    FormsModule,
   

    // ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],

  providers: [],
  exports: []
})

export class usermainModule {

}
