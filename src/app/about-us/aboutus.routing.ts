import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
 
 
 
 
 
 
 

export const AboutusRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: AboutUsComponent
    }]
}
];
