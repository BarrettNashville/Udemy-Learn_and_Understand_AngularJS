var myApp = angular.module('myApp', ['ngRoute']); 

myApp.config(function($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});


myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.person = {
        name: 'John Doe',
        address: '555 Main St., New York, NY 11111'
    }
    
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'A, E, C, M', 
       templateUrl: 'directives/searchresult.html' ,
       replace: true ,
       scope: {
           // the = sign tells us this is a two-way binding and we are passing an object into the directive, not text like with the @ sign
           // this can cause problems if you're trying to do too much to the passed in objects. 
           // you can find yourself updating data that causes the part of the HTML that contains the directive to reload, so the directive reloads. 
           // just be very cautious of how you use directives
           // be wary of having the directive do too much to the scope being passed in
            personObject: "=" 
       }
   } 
});