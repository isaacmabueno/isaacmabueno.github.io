$(document).ready(function(){
  $('.parallax').parallax();
});
$(document).ready(function(){

  $('.materialboxed').materialbox();
});
$(document).ready(function(){
  $('.materialboxed').materialbox();
    $(".button-collapse").sideNav();
    // figure out how to have the nav bar close on click
    // $('materialboxed').click(hide);
    //
    // mobile demo ul
});

// $(document).ready(function() {
//     $(document).scroll(function () {
//         var scroll = $(this).scrollTop();
//         var topDist = $("#container").position();
//         if (scroll > topDist.top) {
//             $('nav').css({"position":"fixed","top":"0"});
//         } else {
//             $('nav').css({"position":"static","top":"auto"});
//         }
//     });
// });
$(document).ready(function() {
  $('.talking-heads').hide();
$('.talking-heads').fadeIn(3000);
  $('.name').hide();
$('.name').fadeIn(2000);
  $('.title').hide();
$('.title').delay(2000).fadeIn(0800);
  $('.right').hide();
$('.right').fadeIn(2000);
  $('.side-nav').hide();
$('.side-nav').fadeIn(2000);
});
$(document).ready(function(){
   $('.collapsible').collapsible({
     accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
 });
