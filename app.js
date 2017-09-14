angular.module('weatherApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
         .state('home',{
             url:'/',
             templateUrl: "../views/about.html",
             controller: "aboutCtrl"
         })
         .state('weather',{
             url:'/weather/:name',
             templateUrl: "../views/weather.html",
             controller: "weatherCtrl"
         })
         .state('5DaysForecast',{
             url:'/5 days Forecat',
             templateUrl: "../views/5DaysForecast.html",
             controller: "5DaysForecastCtrl"
         })
         .state('contact',{
            url:'/contact',
            templateUrl: "../views/contact.html"
        })     
  
      $urlRouterProvider
          .otherwise('/');
  });