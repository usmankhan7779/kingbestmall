import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { ContactusRoutes } from './contactus.routing';
import { ContactUsComponent } from './contact-us.component';
 
 
 
 
 

 

 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ContactusRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
       
      
      
    ],
    declarations: [ContactUsComponent],
    providers:[]
})

export class ContactusModule {}
