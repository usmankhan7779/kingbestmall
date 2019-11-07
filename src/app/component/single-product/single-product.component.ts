import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  ProPics: any = [ 'assets/images_mall/DSC_0094.JPG',
  'assets/images_mall/DSC_0095.JPG',
  'assets/images_mall/DSC_0096.JPG',
  'assets/images_mall/DSC_0097.JPG'];
  PicList: any = [ 
    'assets/images_mall/DSC_0094.JPG',
  'assets/images_mall/DSC_0095.JPG',
  'assets/images_mall/DSC_0096.JPG',
  'assets/images_mall/DSC_0097.JPG'];
  constructor() { }

  ngOnInit() {
    this.get_pic();
  }
  pics;
  myThumbnail;
  myFullresImage;
  ChangeImage(index) {
   this.myThumbnail = this.ProPics[index]
   this.myFullresImage = this.ProPics[index]
 }
 get_pic(){
  for (let i = 0; i < this.ProPics.length - 1; i++) {
    this.PicList[i] = this.ProPics[i + 1];

   console.log (this.PicList[i] = this.ProPics[i + 1])
    // console.log()
  }
  this.myThumbnail = this.ProPics[0]
  

  this.myFullresImage = this.ProPics[0]


  console.log('Pics Before:', this.ProPics);
  console.log('Pics after:', this.PicList);


  console.log('Pics are:', this.ProPics);
 }





}
