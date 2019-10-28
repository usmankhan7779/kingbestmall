import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormalLayoutComponent } from './layouts/normal-layout/normal-layout.component';
import { HomeComponent } from './component/home/home.component';
import { SingleProductComponent } from './component/single-product/single-product.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: '',
    component: NormalLayoutComponent,
    children: [
      { path: 'contactus', loadChildren: './component/contact-us/contactus.module#ContactusModule' },
      { path: 'aboutus', loadChildren: './component/about-us/aboutus.module#AboutusModule' },
      { path: 'single-product',  loadChildren: './component/single-product/single-product..module#SingleProductModule'   },
      { path: 'login', loadChildren: './authentication/login/login.module#LoginModule' },
      // LoginModule        
      //  { path : 'viewuser' , component: ViewuserComponent},
      // { path: 'viewreply', loadChildren: './viewuserreply/viewuserreply.module#ViewUserReplyModule', canActivate: [AuthGuard] },
      // { path: 'paymentsingleDetail', loadChildren: './siglepayment-details/siglepayment-details.module#ViewpaymentSingleModule', canActivate: [AuthGuard] },
    ]
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }