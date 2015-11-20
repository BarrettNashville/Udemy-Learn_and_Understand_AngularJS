// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    
    $scope.submit = function() {
          $location.path("/forecast");
    };
       
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    // API call configuration

    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',   {
        APPID: '69bba652920768e95dd9517369c36b9e',
        callback: 'JSON_CALLBACK',
        cnt: 5
        }, { get: { method: 'JSONP' } }
    );
    
    $scope.weatherResult = $scope.weatherAPI.get({ q:$scope.city, cnt: $scope.days})
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000);
    };
    
}]);