import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NormalLayoutComponent } from './normal-layout/normal-layout.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: '',
    component: NormalLayoutComponent,
    children: [
      { path: 'contactus', loadChildren: './contact-us/contactus.module#ContactusModule' },
      { path: 'aboutus', loadChildren: './about-us/aboutus.module#AboutusModule' },
      //  { path : 'viewuser' , component: ViewuserComponent},
      // { path: 'viewreply', loadChildren: './viewuserreply/viewuserreply.module#ViewUserReplyModule', canActivate: [AuthGuard] },
      // { path: 'paymentsingleDetail', loadChildren: './siglepayment-details/siglepayment-details.module#ViewpaymentSingleModule', canActivate: [AuthGuard] },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
