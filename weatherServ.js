angular.module('weatherApp').service('weatherService', 
function($http){

this.getWeather = function(location){
    return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&APPID=efdbc2d33b8f753ea01432620da598ea')
}
})