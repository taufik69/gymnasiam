$(function(){
'use strict';

////banner slider activation code
$('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    dots:true,
  });

  ///venobox activiation code
  $('.venobox').venobox({
    overlayClose:true,
  }); 
 
  
  // testomonial silder activitaiion code
  $('.testomonial_slider').slick({
    slidesToShow: 1 ,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows:false,
    dots:true,
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
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  //counter up
  $('.counterspin').counterUp({
    delay: 10,
    time: 1000,
});

//logo slider start
$('.slider').slick({
  slidesToShow:3,
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows:true,
  prevArrow:'<i class="fas fa-arrow-left previous_arrow"></i>',
  nextArrow:'  <i class="fas fa-arrow-right next_arrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]


});

});

