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


// scope is not a singleton, but log and routeParams are
// for instance the log object has the main and second properties when you navigate to the two pages below

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Main';
    
    $log.main = 'Property from main';
    $log.log($log);
    
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
    $log.second = 'Property from second';
    $log.log($log);
    
}]);