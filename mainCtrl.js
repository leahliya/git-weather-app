angular.module('weatherApp').controller('mainCtrl', function($scope) {
    //$scope.test = 'Leah is here';
    
    $scope.date = new Date();
    $scope.test = "main controller test";
    $scope.position = navigator.geolocation.watchPosition(function(position) {
        console.log(Math.round(position.coords.latitude), Math.round(position.coords.longitude));
      });

});



