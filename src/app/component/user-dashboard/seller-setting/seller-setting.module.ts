import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SellerSettingComponent} from "./seller-setting.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MaterialModule } from 'src/app/app.module';
 
const loginRoutes: Routes = [
  { path: '', component: SellerSettingComponent }
];


@NgModule({
  declarations: [
    SellerSettingComponent
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

export class SellerSettingModule {

}
