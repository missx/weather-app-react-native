var moment = require('moment');

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
    
    getDateObject: function() {
        let wholeDate = new moment();
        let dateToReturn = {};
        alert(wholeDate.day());
        //set day
        let day = this.getDayOfWeekAbbreviated(wholeDate.day());
        
        //set date 
        let dateOfMonth = wholeDate.date();
        
        //set month
        let month = this.getMonthName(wholeDate.month());
        
        //set year
        let year = wholeDate.year();
        
        dateToReturn = {
            currentDay: day,
            currentDateOfMonth: dateOfMonth,
            currentMonth: month,
            currentYear: year
        };
        
        return dateToReturn;
    },
    
    getDayOfWeekAbbreviated: function(day) {
        var abbrDay = '';
    
        switch (day) {
            case 0:
                abbrDay = 'Sun';
                break;
            case 1:
                abbrDay = 'Mon';
                break;
            case 2:
                abbrDay = 'Tue';
                break;
            case 3:
                abbrDay = 'Wed';
                break;
            case 4:
                abbrDay = 'Thu';
                break;
            case 5:
                abbrDay = 'Fri';
                break;
            case 6:
                abbrDay = 'Sat';
        }
        return abbrDay;
    },
    
    getMonthName: function(nr) {
        var monthName = '';
    
        switch (nr) {
            case 0:
                monthName = 'January';
                break;
            case 1:
                monthName = 'February';
                break;
            case 2:
                monthName = 'March';
                break;
            case 3:
                monthName = 'April';
                break;
            case 4:
                monthName = 'May';
                break;
            case 5:
                monthName = 'June';
                break;
            case 6:
                monthName = 'July';
                break;
            case 7:
                monthName = 'August';
                break;
            case 8:
                monthName = 'September';
                break;
            case 9:
                monthName = 'October';
                break;
            case 10:
                monthName = 'November';
                break;
            case 11:
                monthName = 'December';
        }
        return monthName;
    },
    
    
    
    
}

module.exports = Utils;