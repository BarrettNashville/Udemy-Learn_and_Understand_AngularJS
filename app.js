/*
There is the JavaScript Event Loop and outside of that is the Angular Context.
Angular has watchers in a watch list. Every time you put a variable or function in the scope on the page in the HTML, angular automatically adds a watcher to the watchlist to track old and new values. 
So when events are thrown, angular has a list of things to watch to see if they changed. 
That part of it watching/checking for changes is inside the 'digest loop'. The 'digest cycle' is one revolution of the 'digest loop'.
If one of those things changes, it updates the DOM and the code with that change. Then it runs one more cycle to see if, by changing that, something else should be changed... until all the old values and the new values match. 
*/


var myApp = angular.module('myApp', []); 

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }
    
    // we can add our own watch code to a variable, but you normally wouldn't do this
    $scope.$watch('handle', function(newValue, oldValue){
        console.info('Changed!');
        console.log('Old: ' + oldValue);
        console.log('New: ' + newValue);
    });
    
    // what does it mean to be outside the angular context?
    // set timeout using regular JavaScript
    setTimeout(function() {
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed');
    }, 3000);
    // this doesn't work becase it sets a new thread and runs asyncrhonously. 
    // even though it changed the scope, angular didn't check for it
    // angular didn't realize it changed so it never started a digest loop, it never cycled through the watch list
    // this can cause funky errors
    // two ways to handl this: 
    // wrap the code in a $scope.$apply(function() {});
    
    setTimeout(function() {
        
        $scope.$apply(function() {
            $scope.handle = 'newertwitterhandle';
            console.log('Scope changed again');
    })}, 5000);
    
    // if we had used $timeout (the angular service) intead of regular javascript, 
    // we would not have needed to call $scope.$apply
    
    // when do i have to call $scope.$apply? 
    // most of the time angular is calling it for you
    // have to use it in the cae above when calling regular javascript
    // also may have to use it with jQuery calls, or other libraries
    
    // SO... 
    // the thing that connects the Model (above) to the View (the relevant parts of the HTML file) in angular is the Watchers/Watch List and the Digest Loop. Angular is attaching events and looking at variables, and every time something could have changed, it checks all those values and updates the page and the other variables for you. 
    
    
}]);