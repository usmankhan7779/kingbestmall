import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {WatchlistComponent} from "./watchlist.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MaterialModule } from 'src/app/app.module';

const loginRoutes: Routes = [
  { path: '', component: WatchlistComponent }
];


@NgModule({
  declarations: [
    WatchlistComponent
  ],

  imports: [
    CommonModule,
  
 
    FormsModule,
 
    
    MaterialModule,
    ReactiveFormsModule,
    // TextMaskModule,

    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ],

  providers: [],
  exports: []
})

export class WatchlistModule {

}
