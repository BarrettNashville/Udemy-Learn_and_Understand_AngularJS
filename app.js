var myApp = angular.module('myApp', []); 

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle);  
    };
    
    $scope.characters = 5;
    
    $http.get('/api')
        /* the result parameter below holds whatever data was received by the get request */
        .success(function(result) {
        
            $scope.rules = result;
        
        })
        .error(function(data, status) {
        
            console.log(data);
        
        });
    
    /* assuming there is a form on the webpage to add a new rule ...
    Add Rule: <input type="text" ng-model="newRule" /><a href="#" class="btn btn-default" ng-click="addRule()">Add</a>
    */
    
    $scope.newRule = '';
    $scope.addRule = function() {
        
        /* the second parameter below is what you are sending, and you send it as a JSON object */
        $http.post('/api', {newRule: $scope.newRule })
            .success(function(result) {
            
                $scope.rules = result;
                $scope.newRule = '';
            
            })
            .error(fucntion(data, status) {
                  
                   console.log(data);
                   
            });
        
    };
    
    
}]);