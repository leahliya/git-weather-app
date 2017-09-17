
angular.module('weatherApp')
.controller('fiveDayCtrl', function($scope, $stateParams, fiveDayService) {
// console.log($stateParams)
        $scope.location = "";
        fiveDayService.getForecast($stateParams.location).then(function(result) { 
            console.log(forecast);
            var forecast = result.list;
            var fivedays = [];
            var day = forecast[0].dt_txt.substring(1, 10);
        for (var i = 0; i < forecast.length; i++) {
            console.log(forecast[i].dt_txt.substring(1, 10) !== day);
            if (forecast[i].dt_txt.substring(1, 10) !== day){
               fivedays.push(forecast[i]);
               day = forecast[i].dt_txt.substring(1, 10);
            }
            // return fivedays;
        }
            $scope.forecast = fivedays;
            console.log($scope.forecast)
            if (!($scope.forecast)) {
                alert('We can\'t find that city, try walking outside?');
            }

        });
});