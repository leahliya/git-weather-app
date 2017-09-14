angular.module('weatherApp')
.service('fiveDayService', function($http, $q) {





    this.getForecast = function(location) {
        return $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&units=imperial&APPID=efdbc2d33b8f753ea01432620da598ea'
        }).then(function(response) {
            var results = response.data;
            return results;
        });
    };

    // this.getAPIForecast = function (position) {
    //   var lat, lon;

    //   lat = position.coords.latitude;
    //   lon = position.coords.longitude;
    //   return $http({
    //       method: 'GET',
    //       url: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=8d6d3d96f61b617556cbc73957e7ae65'
    //   });
    // };


    // this.getLocation = function() {
    //   var deferred = $q.defer();
    //   function success(position) {
    //       deferred.resolve(position);
    //   }
    //   navigator.geolocation.getCurrentPosition(success);
    //   return deferred.promise;
    // };



});