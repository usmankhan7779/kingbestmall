import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormalLayoutComponent } from './layouts/normal-layout/normal-layout.component';
import { HomeComponent } from './component/home/home.component';
import { UserDashboardComponent } from './layouts/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: "", component: HomeComponent },

  {
    path: '',
    component: NormalLayoutComponent,
    children: [
      { path: 'contactus', loadChildren: './component/contact-us/contactus.module#ContactusModule' },
      { path: 'aboutus', loadChildren: './component/staticpage/about-us/aboutus.module#AboutusModule' },
      { path: 'single-product', loadChildren: './component/single-product/single-product.module#SingleProductModule' },
      { path: 'login', loadChildren: './authentication/login/login.module#LoginModule' },
      { path: 'gallery', loadChildren: './component/staticpage/gallery/gallery.module#galleryModule' },
      { path: 'VerfiyEmail/:key', loadChildren: './authentication/verify-email/verify-email.module#VerfiyEmailModule' },
      { path: 'signup', loadChildren: './authentication/user-signup/signup.module#UsersignupModule'},
      { path: 'terms', loadChildren: './component/staticpage/terms-use/terms-use.module#TermsUseModule'},
      { path: 'privacy-policy', loadChildren: './component/staticpage/privacy-policy/privacy-policy.module#PrivacyPolicyModule'},      
    ]
  },
  {
    path: '',    component: UserDashboardComponent,
    children: [
      { path: 'user-dashboard', loadChildren: './component/user-dashboard/user-main-dashboard/user-main.module#usermainModule' },
      { path: 'changepassword', loadChildren: './component/user-dashboard/seller-setting/seller-setting.module#SellerSettingModule' },

      // { path: 'change-password', loadChildren: './component/user-dashboard/change-password/change-password.module#ChangePasswordModule' },

      // { path: 'my-bids-buyer', loadChildren: './my-bids-buyer/my-bids-buyer.module#MyBidsBuyerModule', canActivate: [AuthGuard] },
      // { path: 'buyer-orders', loadChildren: './buyer-order/buyer-order.module#BuyerOrderModule', canActivate: [AuthGuard] },
      // { path: 'buyer-invoice', loadChildren: './buyer-invoice/buyer-invoice.module#BuyerInvoiceModule', canActivate: [AuthGuard] },
      // { path: 'buyer-offer', loadChildren: './buyer-offer/buyer-offer.module#BuyerOfferModule', canActivate: [AuthGuard] },
      // { path: 'buyer-store-registration', loadChildren: './store-registration/store-registration.module#StoreRegistrationModule', canActivate: [AuthGuard] },
      // { path: 'watch-Product', loadChildren: './watch-product/watch-product.module#WatchProductModule', canActivate: [AuthGuard] },
      // { path: 'buyer-user-shipment', loadChildren: './usershipment/usershipment.module#UserShipmentModule', canActivate: [AuthGuard] },
      // { path: 'user-detail', loadChildren: './user-detail/user-detail.module#UserDetailModule', canActivate: [AuthGuard] },
      // { path: 'account-setting', loadChildren: './buyer-setting/buyer-setting.module#BuyerSettingModule', canActivate: [AuthGuard] },
     { path: 'select-categorys', loadChildren: './component/user-dashboard/select-category/select-category.module#SelectCategoryModule' },
      { path: 'post-ads', loadChildren: './component/user-dashboard/add-new-products/newproduct.module#addnewproductModule' },
      // // { path: 'watch-Product', loadChildren: './watch-product/watch-product.module#WatchProductModule', },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }