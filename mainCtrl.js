angular.module('weatherApp').controller('mainCtrl', function($scope) {
    //$scope.test = 'Leah is here';
    // var x = document.getElementById("location");
    // //$( "#getLocation" ).click function(){
    // $scope: function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //     } else { 
    //         x.innerHTML = "Geolocation is not supported by this browser.";
    //     }
    // }
    
    $scope.date = new Date();
    $scope.test = "main controller test"

    // var api = "https://fcc-weather-api.glitch.me/api/current?";
    // var lat, lon;
    // var tempUnit = 'C';
    // var currentTempInCelsius;
    
    // $( document ).ready(function(){
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //       var lat = "lat=" + position.coords.latitude;
    //       var lon = "lon=" + position.coords.longitude;
    //       displayWeather(lat, lon);
    //     });
    //   } else {
    //     console.log("Geolocation is not supported by this browser.");
    //   }
    
    //   $("#tempunit").click(function () {
    //     var currentTempUnit = $("#tempunit").text();
    //     var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    //     $("#tempunit").text(newTempUnit);
    //     if (newTempUnit == "F") {
    //       var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
    //       $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    //     } else {
    //       $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    //     }
    //   });
      
    // })
    
    // function displayWeather(lat, lon) {
    //   var urlString = api + lat + "&" + lon;
    //   $.ajax({
    //     url: urlString, success: function (result) {
    //       $("#city").text(result.name + ", ");
    //       $("#country").text(result.sys.country);
    //       currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
    //       $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    //       $("#tempunit").text(tempUnit);
    //       $("#desc").text(result.weather[0].main);
    //       IconGen(result.weather[0].main);
    //     }
    //   });
    // }
    
    // function IconGen(desc) {
    //   var desc = desc.toLowerCase()
    //   switch (desc) {
    //     case 'drizzle':
    //       addIcon(desc)
    //       break;
    //     case 'clouds':
    //       addIcon(desc)
    //       break;
    //     case 'rain':
    //       addIcon(desc)
    //       break;
    //     case 'snow':
    //       addIcon(desc)
    //       break;
    //     case 'clear':
    //       addIcon(desc)
    //       break;
    //     case 'thunderstom':
    //       addIcon(desc)
    //       break;
    //     default:
    //       $('div.clouds').removeClass('hide');
    //   }
    // }
    
    // function addIcon(desc) {
    //   $('div.' + desc).removeClass('hide');
    // }
    
});



