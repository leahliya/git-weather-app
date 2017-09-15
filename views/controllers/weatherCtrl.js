angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService, $stateParams) {
    
    // $scope.test = $stateParams.name;
    weatherService.getWeather($stateParams.name).then(function(response){
        $scope.weather = response.data;
        console.log($scope.weather);
    })
    })


        
    
       