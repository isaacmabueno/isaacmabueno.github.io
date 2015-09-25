$(document).ready(function(){
  $('.parallax').parallax();
});
$(document).ready(function(){

  $('.materialboxed').materialbox();
});
$(document).ready(function(){
  $('.materialboxed').materialbox();
    $(".button-collapse").sideNav();
});
$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $("#container").position();
        if (scroll > topDist.top) {
            $('nav').css({"position":"fixed","top":"0"});
        } else {
            $('nav').css({"position":"static","top":"auto"});
        }
    });
});
$(document).ready(function() {
  $('.talkingheads').hide();
$('.talkingheads').delay(3000).fadeIn(3000);
});
