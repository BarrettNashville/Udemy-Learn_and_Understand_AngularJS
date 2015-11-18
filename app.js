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


myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.people = [
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
        },
        {
        name: 'Jane Doe',
        address: '333 Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
        },
        {
        name: 'George Doe',
        address: '111 Third St.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
        }
        ]
    
    $scope.formattedAddress = function(person) {
        
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'A, E, C, M', 
       templateUrl: 'directives/searchresult.html' ,
       replace: true ,
       scope: {
           personObject: "=" ,
           formattedAddressFunction: "&"
       },
       
       // you would use compile when you have complex code to use
       // he thinks compile should be initialize and post should be onbind since it doesn't actually compile and link
       // you'll almost never have to run code inside compile, only in post.
       // because of this, angular provides a shortcut (next video)
       compile: function(elem, attrs) {
           
           console.log('Compiling...');
          
           console.log(elem);
           
           return {
               
               /* bad idea to use pre-link per angular documentation. use post-link instead
               pre: function(scope, elements, attrs) {
                   
                   console.log('Pre-linking...');
                   console.log(elements);
                   
               },
               */
               
               
               post: function(scope, elements, attrs) {
                   
                   console.log('Post-linking...');
                   
                   if(scope.personObject.name === 'Jane Doe') {
                       elements.removeAttr('class');
                   }
                   
                   console.log(elements);
                   
               }
               
           }
           
       }
   } 
});