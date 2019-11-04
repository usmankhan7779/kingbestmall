import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
 
import {PrivacyPolicyComponent} from "./privacy-policy.component";
const loginRoutes: Routes = [
  { path: '', component: PrivacyPolicyComponent }
];


@NgModule({
  declarations: [
    PrivacyPolicyComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
   
    RouterModule.forChild(loginRoutes)
  ],

  providers: [],
  exports: []
})

export class PrivacyPolicyModule {

}
