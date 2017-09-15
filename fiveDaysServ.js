angular.module('weatherApp')
.service('fiveDayService', function($http, $q) {

    this.getForecast = function(location) {
        return $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&units=imperial&APPID=efdbc2d33b8f753ea01432620da598ea'
        }).then(function(response) {
            var results = response.data;
            return results;
        });
    };

});