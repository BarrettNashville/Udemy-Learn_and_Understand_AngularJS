var myApp = angular.module('myApp', ['ngMessages', 'ngResource']); 

myApp.controller('mainController', ['$scope', '$timeout',function($scope, $timeout) {
    
    $scope.name = 'Barrett';
    // whatever is sitting inside the scope becomes available inside the view, inside the html that's attached to the controller
    // $scope is the glue that connects the controllers code with the view
    // whatever you put in the $scope is available in the view
    // in the view, you don't have to use $scope.name, just name. its assumed that it is inside the $scope object
    // this all happens on the client side. the html is downloaded as is, and then angular updated the values in the memory of the browser.
    // once that memory in the browser is updated, the screen gets repainted/updated
    
    // now lets add a timeout function
    // the interesting thing is that we're just changing the value of a variable that's sitting inside the scope. We're not updating any html.
    // I don't have to worry about updating my view, i just update my data and my view goes along for the ride. 
    $timeout(function(){
        $scope.name = 'Everybody';
    }, 3000)
}]);

