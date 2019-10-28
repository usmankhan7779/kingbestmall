import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
 
 
 
 
 
 

export const ContactusRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ContactUsComponent
    }]
}
];
