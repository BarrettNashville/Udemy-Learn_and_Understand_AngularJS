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
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    }
    
    $scope.formattedAddress = function(person) {
        
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'A, E, C, M', 
       templateUrl: 'directives/searchresult.html' ,
       replace: true ,
       scope: {
           personObject: "=" ,
           // the & means this is a function that's being passed (not text or an object like with @ and =)
           formattedAddressFunction: "&"
       }
   } 
});