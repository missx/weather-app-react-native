var moment = require('moment');

var Utils = {
    
    getImageUrl: function(code) {        
        return 'http://openweathermap.org/img/w/' + code + '.png';
    },
    
    getDateObject: function() {
        let wholeDate = new moment();
        let dateToReturn = {
            currentDay: this.getDayOfWeekAbbreviated(wholeDate.day()),
            currentDateOfMonth: wholeDate.date(),
            currentMonth: this.getMonthName(wholeDate.month()),
            currentYear: wholeDate.year(), 
            tomorrow: this.getDayOfWeekAbbreviated(wholeDate.day() + 1),
            dayAfterTomorrow: this.getDayOfWeekAbbreviated(wholeDate.day() + 2), 
            dayAfterAfterTomorrow: this.getDayOfWeekAbbreviated(wholeDate.day() + 3), 
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
    
    getWholeNr: function(number) {
        if (number) {
            arrayTemp = number.toString().split('.');
            return arrayTemp[0];
        };
    },
    
    
    
    
}

module.exports = Utils;