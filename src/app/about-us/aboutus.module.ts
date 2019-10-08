import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutusRoutes } from './aboutus.routing';
import { AboutUsComponent } from './about-us.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AboutusRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule
        ],
    declarations: [AboutUsComponent],
    providers: []
})

export class AboutusModule { }
