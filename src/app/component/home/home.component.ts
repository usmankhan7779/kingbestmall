import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  GetallCat :any=[];
  GetKingforyou :any=[];
  imageurls = 'https://storage.dhaar.pk/final/';
  constructor(private http: HomeService) { }

  ngOnInit() {
  

this.get_metrics_dasboard();
this.Getlikeforyou();
    // $('.tarck').slick({
    //   slidesToShow: 5,
    //   slidesToScroll: 1,
    //   autoplay:true,
    //   nextArrow: '<i class="fa fa-chevron-left" ></i>',
    //   prevArrow: '<i class="fa fa-chevron-right" ></i>', 
    // });

    $('.slick1').slick({
      infinite:true,
      dots: false,
      autoplay:true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<i class="fa fa-chevron-left" ></i>',
      prevArrow: '<i class="fa fa-chevron-right" ></i>', 
    });

    $('.slick2').slick({
      infinite:true,
      // autoplay:true,
      dots: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: '<i class="fa fa-chevron-left" ></i>',
      prevArrow: '<i class="fa fa-chevron-right" ></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ] 
    });

   

  }



  Getlikeforyou() {

    this.http.Getlikeforyou().subscribe(
      res => {
this.GetKingforyou = res;
console.log(res.Results)


})
  }
  get_metrics_dasboard() {

    this.http.Getall_cat().subscribe(
      res => {
this.GetallCat = res;

$('.tarck').fadeOut(0);
if (this.GetallCat) {
  setTimeout(function () {
    $('.tarck').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: '<i class="fa fa-chevron-left" ></i>',
     prevArrow: '<i class="fa fa-chevron-right" ></i>', 
      // prevArrow: '<button class="leftRs" style="left: 30px;"><i class="fa fa-angle-left"></i></button>',
      // nextArrow: '<button class="rightRs" style="right: 30px;"><i class="fa fa-angle-right"></i></button>',

      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });
  }, 0);
}
$('.tarck').fadeIn(500).delay(200);
    console.log(res)
      

      });
  }
}
