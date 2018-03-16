// changes the color of the navbar upon scrolling to the div with the id "startchange"

// upon scrolling, change the class of the navbar from transparent to colored
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   if (startchange.length){
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $(".nav-transparent").css('background-color', 'rgba(31, 31, 31, 0.9)');
            $(".navbar-collapse").css('background-color', 'rgba(31, 31, 31, 0.0)');
         } else {
            $('.nav-transparent').css('background-color', 'transparent');
            if ($(window).width() <= 768){
              $(".navbar-collapse").css('background-color', 'rgba(31, 31, 31, 0.75)');
            }
         }
     });
    }
});

// upon scrolling fade in the appropriate divs
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.fadein').each( function(i){

            var bottom_of_object = $(this).position().top; // optional: add "+ $(this).outerHeight()" if you want to fade in only when the whole div is visible
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }
        });
    });
});

// upon scrolling, hide the downarrow when reaching the footer
$(document).ready(function(){

   var scroll_start = 0;
   var startchange1 = $('#hidearrow').offset().top;
   var startchange2 = $(document).height()*0.85;

   var maxstartchange = startchange1;
   if (startchange2 < maxstartchange) {
     maxstartchange = startchange2;
   }

   var offset = maxstartchange;

   if (offset){
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset) {
            $(".fa").css('opacity', '0.0');
         } else {
            $('.fa').css('opacity', '0.5');
         }
     });
    }
});
