var myApp = angular.module('myApp', ['ngMessages', 'ngResource']); 
// this second parameter is an array of dependencies. it's where we'll list the angular-messages dependency. We found the 'ngMessages' name by going to https://code.angularjs.org/1.4.7/angular-messages.js and looking at the comments. ngMessages does things like provide form validation. so now we'll grab some of the sample code from the link above and put it in our mainController section and add some bootstrap to it too.
// next we'll add minifed version of ngResource: https://code.angularjs.org/1.4.7/angular-resource.min.js.
// by the way, if we forget to include the script tag for this in our html file, we'll get an error in the console that starts with this: Uncaught Error: [$injector:modulerr] 
// these dependencies are called modules or services
// you can go out and find these other modules or services online and add them to your code

myApp.controller('mainController', function($log, $scope, $filter, $resource) {
    
    $log.log("Hello");
    $log.info("This is some information");
    $log.warn("Warning!");
    $log.debug("Some debug information while writing my code");
    $log.error("This was an error!!");
    
    $scope.name = 'John';
    $scope.formattedname = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formattedname);
    
    console.log($resource);
    
});


// both $scope and $log were injected into the controller because they were named properly
// it doesn't matter in what order we pass the $ parameters. So you could do $log, $scope or $scope, $log

//&log is a safer, easier way to log to the console.

// there are other services too. if you go here https://code.angularjs.org/1.4.7/, you see more than just an angular.js file. for instance, there is an angular-messages.js file. we'll add a reference to this file in our HTML file after our angular.js reference. (We'll use the minified version)