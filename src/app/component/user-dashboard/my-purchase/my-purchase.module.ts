import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MyPurchaseComponent} from "./my-purchase.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MaterialModule } from 'src/app/app.module';

const loginRoutes: Routes = [
  { path: '', component: MyPurchaseComponent }
];


@NgModule({
  declarations: [
    MyPurchaseComponent
  ],

  imports: [
    CommonModule,
  
 
    FormsModule,
 
    
    MaterialModule,
    ReactiveFormsModule,
    // TextMaskModule,

    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ],

  providers: [],
  exports: []
})

export class MyPurchaseModule {

}
