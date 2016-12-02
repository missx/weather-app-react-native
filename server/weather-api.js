var WeatherApi = {
    
    getWeatherFromCoordinates: function(lat, long) {
        let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&mode=json&APPID=dca88c080f0ed5c2e18364a7ad831805';
        return url;        
    },
    
    getForecastFromCityAndCountry: function(city, country) {
        let url = 'api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + countryCode + '&mode=json&units=metric';
        return this.makeRequest(url);
    }
}

module.exports = WeatherApi;