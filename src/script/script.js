$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
        console.log('test');
    });

    $('#blogCarousel').carousel({
        interval: 5000
});
    
});

