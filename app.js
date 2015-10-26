// Directive: an instruction to angular to manipulate a piece of the DOM. This could be 'add a class', 'hide this', 'create this', etc

var myApp = angular.module('myApp', []); 

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }
    
}]);

