var myApp = angular.module('myApp', ['ngMessages', 'ngResource']); 

// this time we'll use the second way of doing dependncy injection in angular using an array. 
// so this...
/*
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $log.info($scope);
    
}]);
*/
// ...becomes this:
myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);
// a minifier is never going to touch the contents of a string so $scope and $log are retained.
// so angular now references the positions of the items in the array up to the function and then replaces each parameter in the function with the item at that position in the array.
// so NOW, the order of the parameters does matter if they don't match up to the order of the items in the array prior to the function.

// there is a second way to do dependency injection in angular that was created just because of the problem below that happens when your code is minified.

// from this point forward in the course, we're going to use this new method of dependency injection.



// by minifying our code, we get some thing like what's below. Really good minifiers replace variable names with much shorter variable names. However, this causes a problem for angular because it is looking for specific things like $scope and $log in this case. Since it doesn't find anything, you get an injector error: Error: [$injector:unpr]

/*
myApp.controller('mainController', function($scope, $log) {
    
    $log.info($scope);
    
});

becomes:

var myApp=angular.module("myApp",["ngMessages","ngResource"]);myApp.controller("mainController",function(n,o){o.info(n)});
*/