import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {TermsUseComponent} from './terms-use.component';
const loginRoutes: Routes = [
  { path: '', component: TermsUseComponent }
];


@NgModule({
  declarations: [
    TermsUseComponent
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

export class TermsUseModule {

}
