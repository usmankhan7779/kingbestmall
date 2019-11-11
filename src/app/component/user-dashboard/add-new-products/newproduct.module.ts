import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewProductsComponent } from './add-new-products.component';
import { MaterialModule } from 'src/app/app.module';

const loginRoutes: Routes = [
  { path: '', component: AddNewProductsComponent }
];


@NgModule({
  declarations: [
    AddNewProductsComponent
  ],

  imports: [
    CommonModule,


    FormsModule,

    MaterialModule,
    ReactiveFormsModule,
    // ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)






    // NgxUploaderModule,
    // TextMaskModule,

    // TextMaskModule,


  ],

  providers: [],
  exports: []
})

export class addnewproductModule {

}
