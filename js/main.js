$(document).ready(function(){


$('.responsives-is').slick({
        infinite: true,
        speed: 900,
        dots:false,
        arows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true, 
        variableWidth: true
  });


$('.cart').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows:false,
                      fade: false,
                      asNavFor: '.iss'
                    });
                    $('.iss').slick({
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      asNavFor: '.cart',
                      dots: false,
                      arrows:false,
                      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
             dots: false,
             arrows:false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
             dots: false,
             arrows:false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
             dots: false,
             arrows:false
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              arrows:false
            }
          }
      ]

});




const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


 $("#modul-1").on("click", function (e) {
           $('.modul-1').css('display','block');
           $('body').css('overflow','hidden')
});

 $("#modul-2").on("click", function (e) {
           $('.modul-2').css('display','block');
           $('body').css('overflow','hidden')
});

 $(".close").on("click", function (e) {
           $('.modul-1').css('display','none');
           $('.modul-2').css('display','none');
           $('body').css('overflow','auto');
});



});