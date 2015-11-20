// SERVICES
weatherApp.service('cityService', function() {
    
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   this.GetWeather = function(city, days) {
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',   {
            APPID: '69bba652920768e95dd9517369c36b9e',
            callback: 'JSON_CALLBACK',
            cnt: 5
            }, { get: { method: 'JSONP' } }
        );
    
        return weatherAPI.get({ q: city, cnt: days});
       
   };
}]);