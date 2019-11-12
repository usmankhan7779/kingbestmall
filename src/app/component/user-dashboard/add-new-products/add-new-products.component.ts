import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-new-products',
  templateUrl: './add-new-products.component.html',
  styleUrls: ['./add-new-products.component.scss']
})



export class AddNewProductsComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {









    this.firstFormGroup = this._formBuilder.group({
      P_Title: ['',  Validators.compose([Validators.required,Validators.minLength(6) ])]
    });
    this.secondFormGroup = this._formBuilder.group({
        //   {
  //     "P_Title": "", Done 
  //     "User_ID": null,
  //     "Cat_Name": null,
  //     "StoreName": null,
  //     "Sub_Cat_Name": null,
  //     "Sub_Sub_Cat_Name": null,
  //     "P_Des": "",
  //     "P_Condition": "",
  //     "Quantity": null,
  //     "MaxQuantity": null,
  //     "Pic": "",
  //     "DicountStatus": false,
  //     "Discountprice": null,
  //     "Discountpersentage": null,
  //     "product_ad_active": false
  // }
      
      Cat_Name: ['',  Validators.compose([Validators.required ])],

      StoreName: ['',  Validators.compose([Validators.required ])],
      
      Sub_Cat_Name: ['',  Validators.compose([Validators.required ])],

      Sub_Sub_Cat_Name: ['',  Validators.compose([Validators.required ])],

      P_Des: ['',  Validators.compose([Validators.required,Validators.minLength(15)  ])],

      Pic: ['',  Validators.compose([Validators.required ])],
      P_Condition: ['',  Validators.compose([Validators.required ])],

      Quantity: ['',  Validators.compose([Validators.required ])],
      MaxQuantity: ['',  Validators.compose([Validators.required ])],
      DicountStatus: ['',  Validators.compose([Validators.required ])],
      Discountprice: ['',  Validators.compose([Validators.required ])],
      product_ad_active: ['',  Validators.compose([Validators.required ])],

    });
  }

}
