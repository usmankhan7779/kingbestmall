import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-new-products',
  templateUrl: './add-new-products.component.html',
  styleUrls: ['./add-new-products.component.scss']
})



export class AddNewProductsComponent implements OnInit {
  // isLinear = false;
  isLinear = false;
  GetAllSubCat:any=[];
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFromGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, private http: HttpService) { }

  ngOnInit() {

    this.http.GetAllCategories().subscribe(resSlidersData => this.GetAllSubCat = resSlidersData);
    this.firstFormGroup = this._formBuilder.group({
      P_Title: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.thirdFromGroup = this._formBuilder.group({


      P_Condition: ['', Validators.compose([Validators.required])],

      Quantity: ['', Validators.compose([Validators.required])],
      // MaxQuantity: ['',  Validators.compose([Validators.required ])],
      // DicountStatus: ['',  Validators.compose([Validators.required ])],
      Discountprice: ['', Validators.compose([Validators.required])],
      // product_ad_active: ['',  Validators.compose([Validators.required ])],


    });
    this.secondFormGroup = this._formBuilder.group({


      Cat_Name: ['', Validators.compose([Validators.required])], //done

      // StoreName: ['',  Validators.compose([Validators.required ])],//done

      Sub_Cat_Name: ['', Validators.compose([Validators.required])],//done


      P_Des: ['', Validators.compose([Validators.required])],

      Pic: ['', Validators.compose([Validators.required])],

    });
  }
  
  getallvalues;
  onRegister() {
    
    let auth = {
      "P_Title": this.firstFormGroup.controls.P_Title.value,

      "Cat_Name": this.secondFormGroup.controls.Cat_Name.value,

      "Sub_Cat_Name": this.secondFormGroup.controls.Sub_Cat_Name.value,

      "P_Des": this.secondFormGroup.controls.P_Des.value,
      "P_Condition": this.thirdFromGroup.controls.P_Condition.value,
      "Quantity": this.thirdFromGroup.controls.Quantity.value,

      "Pic": this.secondFormGroup.controls.Pic.value,

      "Discountprice": this.thirdFromGroup.controls.Discountprice.value,


    }
  
    console.log(this.firstFormGroup, this.secondFormGroup, this.thirdFromGroup)
    this.http.Add_new_product(auth).subscribe(
      data => {
        swal.fire({
          type: 'success',
          title: 'Products are Save',
          showConfirmButton: true,
          width: '512px',
        });
        // this.router.navigate(['login']);
      },
      error => {
      });
    // }
    // else {

    //   this.captcha.resetImg();
    //   this.isequal = false;

    //   swal.fire({
    //     type: 'error',
    //     title: 'Please confirm that you are not a robot',
    //     showConfirmButton: false,
    //     width: '512px',
    //     timer: 2000
    //   });
    // }
  }
  
}
