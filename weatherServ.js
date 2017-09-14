angular.module('weatherApp').service('weatherService', 
function($http){
//     this.getSchedule= function(){
//         return $http.get('schedule.json');
//     }
// })

// function showPosition(position) {
//     x.innerHTML = "Latitude: " + Math.round(position.coords.latitude) + 
//     "<br>Longitude: " + Math.round(position.coords.longitude);

// };


this.getWeather = function(location){
    return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&APPID=efdbc2d33b8f753ea01432620da598ea')
}
})