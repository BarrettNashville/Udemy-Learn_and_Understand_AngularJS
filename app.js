// a service is a singleton object that will contain properties and methods

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
    // the model for this directive is the same as the model for the controller its used within
    // in other words, a directive is able to access its parent scope by default
    // this can be dangerous for a directive used across many pages
    // because of this problem, angular provides "isolated scope" for directives
    // to do this, we add another property called scope to the directive
    // if we have things in the parent scope we need to access in the isolated scope,
    // we can use three special symbols
   return {
       restrict: 'A, E, C, M', // A for Attribute E for Element (A, E is default). C is for Class, M is for coMment
       templateUrl: 'directives/searchresult.html' ,
       replace: true ,
       scope: {
            personName: "@" , // the @ sign means "text"
            // could also do personNameSpecial: "@personName" if you want to grab the value and put it in a property
            personAddress: "@"
       }
   } 
});