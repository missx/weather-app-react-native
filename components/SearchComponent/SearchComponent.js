import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
    StyleSheet,
    ToolbarAndroid,
    ScrollView
} from 'react-native';
import Style from './SearchComponentStyle';
import SearchInputComponent from '../SearchInputComponent/SearchInputComponent';
import GeneralStyles from '../GeneralStyles';
import Api from '../../server/weather-api';
import Utils from '../../utils/js/utils';
import LocationComponent from '../LocationComponent/LocationComponent';
import DateComponent from '../DateComponent/DateComponent';
import CurrentWeatherComponent from '../CurrentWeatherComponent/CurrentWeatherComponent';
import NextDaysComponent from '../NextDaysComponent/NextDaysComponent';

export default class SearchComponent extends Component {
    
    state = {
        placeForecast: undefined,
        placeWeather: undefined,
        place: undefined,
        currentDate: undefined
    };
    
    constructor(props) {
        super(props);
    };
    
    componentWillMount = function () {
        let dateObj = Utils.getDateObject();
        this.setState({currentDate: dateObj});
    }
    
    onActionSelected = (position) => {
        if (position === 0) {
            this.props.navigator.push({
              id: 0
            })
        }
    };
    
    searchForecastParent = (place) => {
        var component = this;
        let wholePlace = place.charAt(0).toUpperCase() + place.slice(1) + ', US'; 
        this.setState({ place : wholePlace});
        let weatherUrl = Api.getWeatherOrForecastFromCityAndCountry(place, 'US', 'weather');
        
        fetch(weatherUrl, {
            method: 'get'
        }).then (function (response) {
            return response.json();
        }).then (function (data) {console.log(data);
            component.setState({placeWeather: data});  
        }).catch (function(err) {
            alert(err);
        });
        
        let forecastUrl = Api.getWeatherOrForecastFromCityAndCountry(place, 'US', 'forecast');
        fetch(forecastUrl, {
            method: 'get'
        }).then (function (response) {
            return response.json();
        }).then (function (data) {
            component.setState({placeForecast: data}); 
            console.log(data);
        }).catch (function(err) {
            alert(err);
        });
    };
    
    render() {
        
        if (!this.state.placeWeather || !this.state.placeForecast) {
            return(
                <View style={GeneralStyles.background}>
                    <ToolbarAndroid
                        logo={require('../../utils/imgs/Weather.png')}
                        title={this.props.title} 
                        actions={[{title: 'Current location', icon: require('../../utils/icons/gps-signal.png'), show: 'always', showWithText: false}]}
                        onActionSelected={this.onActionSelected} 
                        style={Style.toolbar}/>
                    <ScrollView style={GeneralStyles.mainComponent}>
                        <SearchInputComponent searchForecast={this.searchForecastParent}/>
                    </ScrollView>
                </View>
            );
        } else {
            return(
                <View style={GeneralStyles.background}>
                    <ToolbarAndroid
                        logo={require('../../utils/imgs/Weather.png')}
                        title={this.props.title} 
                        actions={[{title: 'Current location', icon: require('../../utils/icons/gps-signal.png'), show: 'always', showWithText: false}]}
                        onActionSelected={this.onActionSelected} 
                        style={Style.toolbar}/>
                    <ScrollView style={GeneralStyles.mainComponent}>
                        <SearchInputComponent searchForecast={this.searchForecastParent}/>
                        <View style={Style.currentDayView}>
                            <LocationComponent location={this.state.place}/>
                            <DateComponent abbrDay={this.state.currentDate.currentDay} day={this.state.currentDate.currentDateOfMonth} month={this.state.currentDate.currentMonth} year={this.state.currentDate.currentYear}/>
                            <CurrentWeatherComponent 
                                imageCode={this.state.placeWeather.weather[0].icon}
                                currentTemperature={this.state.placeWeather.main.temp}
                                min={this.state.placeWeather.main.temp_min}
                                max={this.state.placeWeather.main.temp_max}/>
                        </View>
                        <View style={Style.nextDaysView}>
                            <NextDaysComponent imageCode={this.state.placeForecast.list[1].weather[0].icon} min={this.state.placeForecast.list[2].temp.min}
                            max={this.state.placeForecast.list[1].temp.max} abbrDay={this.state.currentDate.tomorrow}/>
                            <NextDaysComponent imageCode={this.state.placeForecast.list[2].weather[0].icon} min={this.state.placeForecast.list[2].temp.min}
                            max={this.state.placeForecast.list[2].temp.max} abbrDay={this.state.currentDate.dayAfterTomorrow}/>
                            <NextDaysComponent imageCode={this.state.placeForecast.list[3].weather[0].icon} min={this.state.placeForecast.list[3].temp.min}
                            max={this.state.placeForecast.list[3].temp.max} abbrDay={this.state.currentDate.dayAfterAfterTomorrow}/>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
}