angular.module('weatherApp')
.directive('weatherShow', function() {

  return {
    templateUrl: 'weatherShow.html',
    restrict: 'E',
       scope: {
       city: '=',
       getPosition: '&'
     },
       controller: function( $scope, weatherService ) {
         $scope.getPosition = weatherService.showPosition();
     },
//     link: function( scope, element, attributes ) {
//       scope.getSchedule.then(function( response ) {
//       scope.schedule = response.data;

//       scope.schedule.forEach(function( scheduleDay ) {
//           if (scheduleDay.lesson === scope.lesson) {
//             element.css('text-decoration', 'line-through');
//             scope.lessonsDay=scheduleDay.wwekDay;
//             return;
//           }
//         });
//       });

//     }
 }

});
//document.getElementById("time").innerHTML = Date(); 