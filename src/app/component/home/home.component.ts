import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  GetallCat: any = [];
  GetKingbest: any = [];
  GetALLLikeforyou: any = [];
  GetAll_products: any = [];
  imageurls = 'https://storage.dhaar.pk/final/';
  GetALLFeaturedProductss: any = [];
  constructor(private http: HomeService) { }

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


    this.get_metrics_dasboard();
    this.Getlikeforyou();
    this.GetAllproducts();
    this.GetFreateuredProducts();
  
    $('.slick1').slick({
      infinite: true,
      dots: false,
      autoplay: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<i class="fa fa-chevron-left" ></i>',
      prevArrow: '<i class="fa fa-chevron-right" ></i>',
    });
 
  }

  readMore(){
    $(".vendors-box").addClass("vendors-box-show");
    $('.read-less').show();
    $('.read-more').hide();
  };
  readLess() {
    $(".vendors-box").removeClass("vendors-box-show");
    $('.read-more').show();
    $('.read-less').hide();
  }
  Getlikeforyou() {

    this.http.Getlikeforyou().subscribe(
      res => {


        let demoactuprods;
        demoactuprods = res.Results;

        for (let prods of demoactuprods) {
          this.GetALLLikeforyou.push(prods.product);
        }


      })
  }

  GetAllproducts() {

    this.http.Get_productfromAll().subscribe(
      res => {


        let demoactuprods;
        demoactuprods = res.Results;

        for (let prods of demoactuprods) {
          this.GetAll_products.push(prods.product);
        
  
        }
        // $('.slick2').fadeOut(0);
        if (this.GetAll_products) {
          setTimeout(function () {
            // $('.slick2').slick({
            //   infinite: true,
            //   slidesToShow: 6,
            //   slidesToScroll: 1,
            //   autoplay: true,
            //   nextArrow: '<i class="fa fa-chevron-left" ></i>',
            //   prevArrow: '<i class="fa fa-chevron-right" ></i>',
            //   // prevArrow: '<button class="leftRs" style="left: 30px;"><i class="fa fa-angle-left"></i></button>',
            //   // nextArrow: '<button class="rightRs" style="right: 30px;"><i class="fa fa-angle-right"></i></button>',

            //   responsive: [
            //     {
            //       breakpoint: 1199,
            //       settings: {
            //         slidesToShow: 3,
            //         infinite: true
            //       }
            //     },
            //     {
            //       breakpoint: 767,
            //       settings: {
            //         slidesToShow: 2,
            //       }
            //     },
            //     {
            //       breakpoint: 639,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }

            //   ]
            // });
          }, 0);
        }
        $('.slick2').fadeIn(500).delay(200);
        console.log(res)

      })
  }

  GetFreateuredProducts() {
 

      this.http.GetAllFeaturedProducts().subscribe(resSlidersData => {

        // this.GetALLAuctionProductss = resSlidersData.Results;
        let demofreprods;
        demofreprods = resSlidersData.Results;

        for (let prods of demofreprods) {
          this.GetALLFeaturedProductss.push(prods.product);
        }
        //console.log(this.GetALLFeaturedProductss);

        $('.slick2').fadeOut(0);
        if (this.GetALLFeaturedProductss) {
          setTimeout(function () {
            $('.slick2').slick({
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
        $('.slick2').fadeIn(500).delay(200);
       
      });
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
