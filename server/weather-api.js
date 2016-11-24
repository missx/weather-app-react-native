var WeatherApi = {
    
    getForecastFromCoordinates: function(lat, long) {
        let url = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&mode=json&APPID=dca88c080f0ed5c2e18364a7ad831805';
        return this.makeRequest(url);        
    },
    
    getForecastFromCityAndCountry: function(city, country) {
        let url = 'api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + countryCode + '&mode=json';
        return this.makeRequest(url);
    },
    
    makeRequest: function (url) {
        fetch(url, {
            method: 'get'
        }).then (function (response) {
            return response.json();
        }).then (function (data) {
            console.log(data);
            return data;
        }).catch (function(err) {
            console.error(error)
        });
       
    }
}

module.exports = WeatherApi;