import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $('.slick1').slick({
      infinite:true,
      dots: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<i class="fa fa-chevron-left" ></i>',
      prevArrow: '<i class="fa fa-chevron-right" ></i>', 
    });

    $('.slick2').slick({
      infinite:true,
      autoplay:true,
      dots: false,
      speed: 300,
      slidesToShow: 4,
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

}
