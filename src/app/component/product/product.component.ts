import { Component, OnInit , Inject, PLATFORM_ID } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
declare var $:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private obj: HttpService,private fb: FormBuilder,
  private _nav: Router) { }

  ngOnInit() {
   
  }

  grid(){
    $('.Grid-view').show();
    $('.List-view').hide();
  };
  list() {
    $('.List-view').show();
    $('.Grid-view').hide();
  }

}
