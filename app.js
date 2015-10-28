var myApp = angular.module('myApp', []); 

myApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log) {

    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    // let's say we want to limit the twitter handle to 5 characters 
    $scope.characters = 5;
    
    $scope.rules = [
        
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used elsewhere"},
        {rulename: "Must be cool"}
    ];
    
    $log.log($scope.rules);
    
}]);