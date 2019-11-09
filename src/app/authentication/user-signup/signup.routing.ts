import { Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup.component';
 
 

export const SignupRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component:  UserSignupComponent
    }]
}
];
