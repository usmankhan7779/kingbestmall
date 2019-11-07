import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormalLayoutComponent } from './layouts/normal-layout/normal-layout.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },

  {
    path: '',
    component: NormalLayoutComponent,
    children: [
      { path: 'contactus', loadChildren: './component/contact-us/contactus.module#ContactusModule' },
      { path: 'aboutus', loadChildren: './component/about-us/aboutus.module#AboutusModule' },
      { path: 'single-product', loadChildren: './component/single-product/single-product.module#SingleProductModule' },
      { path: 'login', loadChildren: './authentication/login/login.module#LoginModule' },
      { path: 'gallery', loadChildren: './component/staticpage/gallery/gallery.module#galleryModule' },
      { path: 'VerfiyEmail/:key', loadChildren: './authentication/verify-email/verify-email.module#VerfiyEmailModule' },
      { path: 'signup', loadChildren: './component/user-signup/signup.module#UsersignupModule'},
      { path: 'terms', loadChildren: './component/staticpage/terms-use/terms-use.module#TermsUseModule'},
      { path: 'privacy-policy', loadChildren: './component/staticpage/privacy-policy/privacy-policy.module#PrivacyPolicyModule'},      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }