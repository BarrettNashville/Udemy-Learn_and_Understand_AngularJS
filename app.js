var myApp = angular.module('myApp', []); 

myApp.controller('mainController', function($scope) {
    
    console.log($scope);
    // this $scope object was created and passed to the controller function because angular *looked at the controller function*, parsed out what its parameters were and realized, hey, one of those is $scope. so i'm going to create $scope and pass it to the function. This is extremely powerful. This means that all you have to do is put the name of the variable correctly in your function and you'll get it. $scope is a service that is a part of the core angular modules but there are others. they also can get passed to your function simply by putting them in the list. This makes our code more testable, verifiable, and stable.
    
});

//my note: so what if we log the controller function?
console.log(angular.injector().annotate(myApp.controller)); 
// empty array?

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}

// this feature inside angular, you can pass it a function and it will parse that string and create an array of each parameter that function expects. So....
console.log(angular.injector().annotate(searchPeople));

//... if you change one of the parameters to $scope, angular could find it
var searchPeople2 = function searchPeople2($scope, lastName, height, age, occupation) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople2));

// you could put $scope wherever you wanted in the function parameters and angular would still find it. 
// when angular finds a parameter it recognizes like $scope, it says ok, i'll pass the object i create to that spot in the function. so above, we'll console.log($scope)


