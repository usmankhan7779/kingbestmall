import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { MaterialModule } from 'src/app/app.module';
import { RecapchaModule } from 'src/app/recapcha/recapcha.module';
import { UserSignupComponent } from './user-signup.component';
import { SignupRoutes } from './signup.routing';
 
 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SignupRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        MaterialModule,
        RecapchaModule
        ],






         
    declarations: [UserSignupComponent],
    providers: []
})

export class UsersignupModule { }
