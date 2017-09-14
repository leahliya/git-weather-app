angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService, $stateParams) {
    
    $scope.test = $stateParams.name;
        weatherService.getWeather($stateParams.name).then(function(response){
        console.log(response);
        $scope.weather = response.data;
    })
    })


        
    
       