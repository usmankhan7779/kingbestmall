import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { singleproductsRoutes } from './single-product.routing';
import { SingleProductComponent } from './single-product.component';
import { SlickModule } from 'ngx-slick';
// import { ImageZoomModule } from "angular2-image-zoom";
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(singleproductsRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        // ImageZoomModule,
        SlickModule.forRoot(),
        ],
    declarations: [SingleProductComponent],
    providers: []
})

export class SingleProductModule { }
