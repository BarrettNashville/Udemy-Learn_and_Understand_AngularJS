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


myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {

    
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    
    
}]);

myApp.directive("searchResult", function() {
    //the html below came from the Bootstrap website: http://getbootstrap.com/components/#list-group-custom-content
   return {
       restrict: 'A, E, C, M', // A for Attribute E for Element (A, E is default). C is for Class, M is for coMment
       // instead of using template: we can use templateUrl: and reference another html file
       templateUrl: 'directives/searchresult.html' ,
       // this setting will replace the <search-result> element in the html
       replace: true
   } 
});