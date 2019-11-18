import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from 'src/app/Config';

@Component({
  selector: 'app-add-new-products',
  templateUrl: './add-new-products.component.html',
  styleUrls: ['./add-new-products.component.scss']
})



export class AddNewProductsComponent implements OnInit {
  // isLinear = false;
  baseUrl = environment;
  isLinear = false;

  GetAllSubCat: any = [];
  url: any = [];
  filetoup: any = [];
  GetAllCat: any = [];
  PicCounter: any = 0;
  PictureCheck = false;
  filetoup1: any = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFromGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, private http: HttpService, private https:HttpClient) { }

  ngOnInit() {

    this.http.GetAllCategories().subscribe(resSlidersData => this.GetAllCat = resSlidersData);
    this.firstFormGroup = this._formBuilder.group({
      P_Title: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.secondFormGroup = this._formBuilder.group({


      Cat_Name: ['', Validators.compose([Validators.required])], //done
      Sub_Cat_Name: ['', Validators.compose([Validators.required])],//done


      P_Des: ['', Validators.compose([Validators.required])],

      Pic: ['', Validators.compose([Validators.required])],

    });
    this.thirdFromGroup = this._formBuilder.group({
      PurchasedPrice: ['', Validators.compose([Validators.required])],//done
      FixedPrice: ['', Validators.compose([Validators.required])],//done

      P_Condition: ['', Validators.compose([Validators.required])],

      Quantity: ['', Validators.compose([Validators.required])],
      // MaxQuantity: ['',  Validators.compose([Validators.required ])],
      // DicountStatus: ['',  Validators.compose([Validators.required ])],
      Discountprice: ['', Validators.compose([Validators.required])],
      // product_ad_active: ['',  Validators.compose([Validators.required ])],


    });

  }




  // onChange(event: FileList) {

  //   this.PicCounter += event.length;

  //   console.log('PicCounter is', this.PicCounter);

  //   if (event.length <= 5 && this.PicCounter <= 5) {
  //     this.PictureCheck = true;
  //     console.log('Event', event);
  //     for (let i = 0; i < event.length; i++) {
  //       if (event) {
  //         const reader = new FileReader();
  //         reader.onload = (event: any) => {
  //           console.log('Inner event', event);
  //           this.url.push(event.target.result);
  //         };
  //         reader.readAsDataURL(event[i]);
  //       }
  //     }
  //     this.filetoup1 = event;
  //     for (let itm of this.filetoup1) {
  //       this.filetoup.push(itm);
  //     }
  //     console.log('Filetoup has:', this.filetoup);
  //   } else {
  //     Swal.fire('Maximum 5 Pictures are allow', '', 'error');
  //     this.PicCounter -= event.length;
  //   }

  //   console.log('PicCounter at end is', this.PicCounter);

  // }
  lengthes;
  lengthplus =[];
  onChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.array.push(event.target.files)
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.url.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
      for (let i = 0; i < this.array.length; i++) {
        this.lengthes = this.array[i].length
      }
      this.lengthplus.push(this.lengthes)
      this.imglength = this.lengthplus.reduce((a, b) => a + b, 0)
    }
  }
  removepic(image: File) {
    console.log('image isss:', image);
    this.filetoup.splice(image, 1);
    this.url.splice(image, 1);
    this.PicCounter -= 1;
    console.log('filetoup after remove:', this.filetoup);
  }

  array=[];
  private input : any;
  post_list() {
    // alert('post_list')
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array[i].length; j++) {
        this.uploadfiles(i, j)
        // alert('for loop ')
      }

    }
  }
  upload() {
    // let uth ={

    // }
    alert('upload')
    this.http.images(
      
      this.input ).subscribe(data => {
        if (data === "Sorry, not a valid Image.Sorry, only JPG, JPEG, PNG & GIF files are allowed.Sorry, your file was not uploaded.") {
        }
        else {

          
          console.log(data);
          alert(data);
          // this.model.blog_image = data;
        
          // this.signupuserdata();
        }
      });



  }
  one_pic;
  getimagesString;
  imglength
  uploadfiles(index, index1) {
    // alert('upload flies ')
    this.input = new FormData();
    // this.input.append('fileToUpload', this.array[index][index1]);
    this.https.post(Config.Imageurlupload, this.input, { responseType: 'text' }).subscribe(data => {
      if (data === 'Sorry, not a valid Image.Sorry, only JPG, JPEG, PNG & GIF files are allowed.Sorry, your file was not uploaded.') {
      }
      else {
        this.one_pic = data;
        this.getimagesString.push(this.one_pic);
        if (this.getimagesString.length == this.imglength) {
          this.onRegister()
        }
      }
    })
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

      "Pic": this.getimagesString,

      "Discountprice": this.thirdFromGroup.controls.Discountprice.value,

      "PurchasedPrice": this.thirdFromGroup.controls.PurchasedPrice.value,//done
      "FixedPrice": this.thirdFromGroup.controls.FixedPrice.value//done

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
  getvalue_2(val1, val2) {
    alert(val1)
    alert(val2)
    this.http.GetAllCategories_sub(val2).subscribe(resSlidersData => this.GetAllSubCat = resSlidersData);
  }

}
