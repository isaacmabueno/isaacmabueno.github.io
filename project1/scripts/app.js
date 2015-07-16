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
    var template = weatherData.name + "," + weatherData.sys.country + " and the current weather is.. " + weatherData.weather[0].description;
    $(selectorString).append(template);
    return true;
  };

//when the document is ready
$(document).ready(function(){
  console.log("let's get ready to rumble!");
  var weatherData = app.fetchWeather();

$('.logo').fadeIn(3000);
});
















// var app = app || {};
// app.getRequest = {
//   type: 'get',
//   url: 'http://ga-chicago.github.io/project1/data.json'
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   },
//   error: function(error) {
//     console.log(error);
//   }
// };


// var app = app
// $.ajax(app.getRequest);





//   $("#owl-demo").owlCarousel({
//
//       autoPlay: 3000, //Set AutoPlay to 3 seconds
//
//       items : 4,
//       itemsDesktop : [1199,3],
//       itemsDesktopSmall : [979,3]
//
//   });
//
// });
//
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
