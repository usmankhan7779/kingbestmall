import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { MaterialModule } from 'src/app/app.module';
import { CheckOutComponent } from './check-out.component';

const loginRoutes: Routes = [
  { path: '', component: CheckOutComponent }
];


@NgModule({
  declarations: [
    CheckOutComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ],

  providers: [],
  exports: []
})

export class checkoutModule {

}
