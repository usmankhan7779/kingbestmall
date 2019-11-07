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

  
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button class="slick-main-btn-left"><i class="fa fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-main-btn-right"><i class="fa fa-chevron-right"></i></button>',
    infinite: true,
    responsive: [
      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 942,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  };

  

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
