var apiKey = require('./../.env').apiKey;

Weather = function(){
};

Weather.prototype.getWeather = function(city, displayFunction) {
  $.get('http://api.github.com/users' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(name, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
