import { Routes } from '@angular/router';
import { SingleProductComponent } from './single-product.component';
 

export const singleproductsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: SingleProductComponent
    }]
}
];
