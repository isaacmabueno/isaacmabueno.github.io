// $(document).ready(function() {
//
//
//
//   $('.logo').fadeIn(3000);
//   });
  //namespace 'app'
  var app = app || {}
  //fetch the weather
  app.fetchWeather = function () {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=chicago,il", function(data){
      console.log(data, "#weather");
      //things to do with the data!
      app.renderWeather(data,"#weather");
    });
    return true;


  };
  //render the weather
  app.renderWeather = function(weatherData, selectorString) {
    var template = "Present Tense Fine Ales is located in " + weatherData.name + "," + weatherData.sys.country + " where the current weather is..." + weatherData.weather[0].description;
    $(selectorString).append(template);
    return true;
  };

//when the document is ready
$(document).ready(function(){
  console.log("let's get ready to rumble!");
  var weatherData = app.fetchWeather();
//

$('.logo').slideDown(4000);
$('.logo1').fadeIn(4000);
// // $('.emptytop').click(function(event){
//   $('.emptytop').slideUp(3000);
// });

$('.hero').delay(2000).slideUp(3000);
$('.navbar').hide();
$('.navbar').delay(3000).fadeIn(3000);

});


   //
  //  $('html, body').animate({
  //      scrollTop: $( $(this).attr('href') ).offset().top
  //  }, 500);
  // $('.hero').delay(3000).animate({
  //   marginTop: '-100%'













// $('').mouseenter(function(){
//   $(this).animate ({
//     height: '+=25px'
//   });
// $('').mouseleave(function(){
//   $(this).animate ({
//     height: '+=25px'
//   });
//
// })
// })
// });
