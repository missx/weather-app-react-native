import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
    StyleSheet,
    ToolbarAndroid,
    TouchableHighlight,
    ScrollView
} from 'react-native'; 
import LocationComponent from '../LocationComponent/LocationComponent';
import DateComponent from '../DateComponent/DateComponent';
import CurrentWeatherComponent from '../CurrentWeatherComponent/CurrentWeatherComponent';
import NextDaysComponent from '../NextDaysComponent/NextDaysComponent';
import GeneralStyles from '../GeneralStyles';
import Style from './HomeComponentStyle';
import Api from '../../server/weather-api';
import Utils from '../../utils/js/utils';

export default class HomeComponent extends Component {
    
    constructor(props) {
        super(props);
    };
    
    state = {
        currentLocation: undefined,
        currentForecast: undefined,
        currentWeather: undefined,
        currentDate: undefined,
    };
    
    componentWillMount = function () {
        this.getDateParts();
    };
        
    componentDidMount = function () {        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({currentLocation: position});
                this.getCurrentForecast();
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 10000, maximumAge: 3000}
        );
    };
    
    getDateParts = function () {
        let date = Utils.getDateObject();
        this.setState({currentDate: date});
    };
    
    _onActionSelected = (position) => {
        if (position === 0) {
            this.props.navigator.push({
              id: 1
            })
        }
    };
    
    getCurrentForecast = () => {
        let lat = this.state.currentLocation.coords.latitude;
        let long = this.state.currentLocation.coords.longitude;
        var component = this;
        
        let weatherUrl = Api.getWeatherOrForecastFromCoordinates(lat, long, 'weather');
        fetch(weatherUrl, {
            method: 'get'
        }).then (function (response) {
            return response.json();
        }).then (function (data) {
            component.setState({currentWeather: data}); 
            console.log('current', data.weather[0].icon);
        }).catch (function(err) {
            alert(err);
        });
        
        let forecastUrl = Api.getWeatherOrForecastFromCoordinates(lat, long, 'forecast');
        fetch(forecastUrl, {
            method: 'get'
        }).then (function (response) {
            return response.json();
        }).then (function (data) {
            component.setState({currentForecast: data}); 
            console.log(data);
        }).catch (function(err) {
            alert(err);
        });
        
    };
    
    render() { 
        
        if (!this.state.currentWeather || !this.state.currentForecast) {
            return (
                <View style={GeneralStyles.background}>
                    <ToolbarAndroid
                        logo={require('../../utils/imgs/Weather.png')}
                        title={this.props.title} 
                        actions={[{title: 'Search Location', icon: require('../../utils/icons/search.png'), show: 'always', showWithText: false}]}
                        onActionSelected={this._onActionSelected} 
                        style={Style.toolbar}/>
                    <ScrollView style={Style.main}>
                        <Text>Hello</Text>
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View style={GeneralStyles.background}>
                    <ToolbarAndroid
                        logo={require('../../utils/imgs/Weather.png')}
                        title={this.props.title} 
                        actions={[{title: 'Search Location', icon: require('../../utils/icons/search.png'), show: 'always', showWithText: false}]}
                        onActionSelected={this._onActionSelected} 
                        style={Style.toolbar}/>
                    <ScrollView style={GeneralStyles.mainComponent}>
                        <View style={Style.currentDayView}>
                            <LocationComponent location='Montevideo, Uruguay'/>
                            <DateComponent 
                            abbrDay={this.state.currentDate.currentDay}
                            day={this.state.currentDate.currentDateOfMonth} 
                            month={this.state.currentDate.currentMonth} 
                            year={this.state.currentDate.currentYear}/>
                            <CurrentWeatherComponent 
                                imageCode={this.state.currentWeather.weather[0].icon}
                                currentTemperature={this.state.currentWeather.main.temp}
                                min={this.state.currentWeather.main.temp_min}
                                max={this.state.currentWeather.main.temp_max}/>
                        </View>
                        <View style={Style.nextDaysView}>
                            <NextDaysComponent imageCode={this.state.currentForecast.list[1].weather[0].icon} min={this.state.currentForecast.list[2].temp.min}
                            max={this.state.currentForecast.list[1].temp.max} abbrDay={this.state.currentDate.tomorrow}/>
                            <NextDaysComponent imageCode={this.state.currentForecast.list[2].weather[0].icon} min={this.state.currentForecast.list[2].temp.min}
                            max={this.state.currentForecast.list[2].temp.max} abbrDay={this.state.currentDate.dayAfterTomorrow}/>
                            <NextDaysComponent imageCode={this.state.currentForecast.list[3].weather[0].icon} min={this.state.currentForecast.list[3].temp.min}
                            max={this.state.currentForecast.list[3].temp.max} abbrDay={this.state.currentDate.dayAfterAfterTomorrow}/>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
}