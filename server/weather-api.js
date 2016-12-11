var WeatherApi = {
    
    getWeatherOrForecastFromCoordinates: function(lat, lon, type) {
        let url = 'http://api.openweathermap.org/data/2.5/' + type + '?lat=' + lat + '&lon=' + lon + '&units=metric&mode=json&APPID=dca88c080f0ed5c2e18364a7ad831805';
        return url;        
    },
    
    getWeatherOrForecastFromCityAndCountry: function(city, countryCode, type) {
        let url = 'http://api.openweathermap.org/data/2.5/' + type + '?q=' + city + ',' + countryCode + '&mode=json&units=metric';
        return url;
    }
}

module.exports = WeatherApi;