var WeatherApi = {
    
    getWeatherOrForecastFromCoordinates: function(lat, lon, type) {
        let url = 'http://api.openweathermap.org/data/2.5/' + type;
        
        if (type === 'forecast') {
            url += '/daily';
        }
        
        url += '?lat=' + lat + '&lon=' + lon + '&units=metric&mode=json'
        
        if (type === 'forecast') {
            url += '&cnt=4';
        }
        
        url +='&APPID=dca88c080f0ed5c2e18364a7ad831805';
        return url;        
    },
    
    getWeatherOrForecastFromCityAndCountry: function(city, countryCode, type) {
        let url = 'http://api.openweathermap.org/data/2.5/' + type;
        
        if (type === 'forecast') {
            url += '/daily';
        }
        
        url += '?q=' + city + ',' + countryCode + '&mode=json&units=metric'
        
        if (type === 'forecast') {
            url += '&cnt=4';
        }
        
        url += '&APPID=dca88c080f0ed5c2e18364a7ad831805';
        return url;
    }
}

module.exports = WeatherApi;