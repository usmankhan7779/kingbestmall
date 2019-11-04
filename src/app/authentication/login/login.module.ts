import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/app.module';
 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LoginRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        MaterialModule,
        ],






        // imports: [
        //     CommonModule,
        //     FormsModule,
        //     HeaderModule,
        //     ReactiveFormsModule,
        //     RecapchaModule,
        //     MaterialModule,
        //     RecaptchaModule.forRoot(),     
        //     // HeaderModule,
        //     RouterModule.forChild(loginRoutes)
        //   ],
    declarations: [LoginComponent],
    providers: []
})

export class LoginModule { }
