$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
        console.log('test');
    });

    $('#blogCarousel').carousel({
        interval: 5000
});

new WOW().init();

/*$(function(){
    $(".desc-box1").hover(
      function () {
        $(this).toggleClass('shake');
        $(this).removeClass('slideInRight slow');
      }, 
    
    );
});
*/


$(window).scroll(function (event) {
    console.log('afaf');
});
    
});


   
  

$('#home').scroll(function() {
    console.log('afaf');
});