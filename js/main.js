$(document).ready(function(){

    $("button.burg").click(function() {     

        $('.burg__bg').css('display','block');
    });

     $("button.close").click(function() {     

        $('.burg__bg').css('display','none');
    });




$('ul.tabs li').click(function(){
          var tab_id = $(this).attr('data-tab');

          $('ul.tabs li').removeClass('current');
          $('.cat__wrap').removeClass('current');

          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
  });







});


