var myApp = angular.module('myApp', []); 

myApp.controller('mainController', function($scope) {
    
    
    
});

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}


console.log(searchPeople);

var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);

// these are examples of taking a function in javascript and coverting it to a string
// because of this, you could do some fancy coding to parse the string and figure out what the names of the parameters are to the function, so I can then make a decision based upon what I see and that's exactly what Angular does.