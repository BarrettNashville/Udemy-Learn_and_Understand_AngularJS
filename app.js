var myApp = angular.module('myApp', []); // takes the name of your app and an array of dependencies

myApp.controller('mainController', function($scope) {
    
    // we can add properties and functions to the $scope
    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    
    $scope.getname = function() {
        return 'John Doe';
    }
    
    $scope.getname();
    
    console.log($scope);
    
});

// $scope is a way of doing dependency injection in angular

// the $scope becomes the middle piece between the view and the controller. 

// the $scope defines that data that goes back and forth between the function above and what appears in the HTML in the mainController section