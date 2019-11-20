import { Component, OnInit , Inject, PLATFORM_ID } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-my-purchase',
  templateUrl: './my-purchase.component.html',
  styleUrls: ['./my-purchase.component.scss']
})
export class MyPurchaseComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private obj: HttpService,private fb: FormBuilder,
  private _nav: Router) { }

  ngOnInit() {
  }

}
