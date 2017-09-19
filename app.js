angular.module('weatherApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
         .state('home',{
             url:'/',
             templateUrl: "./views/about.html",
             controller: "aboutCtrl"
         })
         .state('weather',{
             url:'/weather/:name',
             templateUrl: "./views/weather.html",
             controller: "weatherCtrl"
         })
         .state('fiveDaysForecast',{
             url:'/fiveDaysForecast/:location',
             templateUrl: "./views/fiveDay.html",
             controller: "fiveDayCtrl"
         })
         .state('contact',{
            url:'/contact',
            templateUrl: "./views/contact.html"
        })     
  
      $urlRouterProvider
          .otherwise('/');
  });