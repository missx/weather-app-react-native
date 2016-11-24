var Utils = {
    
    _findCorrespondingWeatherImg: function(weatherDescription) {
        
        var image = '';
        
        switch (weatherDescription) {
            case 'clear sky':
                image = 'http://openweathermap.org/img/w/01d.png';
                break;
            case 'few clouds':
                image = 'http://openweathermap.org/img/w/02d.png';
                break;
            case 'scattered clouds':
                image = 'http://openweathermap.org/img/w/03d.png';
                break;
            case 'broken clouds':
                image = 'http://openweathermap.org/img/w/04d.png';
                break;
            case 'shower rain':
                image = 'http://openweathermap.org/img/w/09d.png';
                break;
            case 'rain':
                image = 'http://openweathermap.org/img/w/10d.png';
                break;
            case 'thunderstorm':
                image = 'http://openweathermap.org/img/w/11d.png';
                break;
            case 'snow':
                image = 'http://openweathermap.org/img/w/13d.png';
                break;
            case 'mist':
                image = 'http://openweathermap.org/img/w/50d.png';
        }
        return image;
    },
    
    _getDayOfWeekAbbreviated: function(day) {
        var abbrDay = '';
    
        switch (day) {
            case 'Monday':
                abbrDay = 'Mon';
                break;
            case 'Tuesday':
                abbrDay = 'Tue';
                break;
            case 'Wednesday':
                abbrDay = 'Wed';
                break;
            case 'Thursday':
                abbrDay = 'Thu';
                break;
            case 'Friday':
                abbrDay = 'Fri';
                break;
            case 'Saturday':
                abbrDay = 'Sat';
                break;
            case 'Sunday':
                abbrDay = 'Sun';
        }
        return abbrDay;
    },
    
    
}

module.exports = Utils;