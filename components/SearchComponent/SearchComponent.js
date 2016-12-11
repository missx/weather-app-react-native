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
        place: undefined
    };
    
    constructor(props) {
        super(props);
    };
    
    onActionSelected = (position) => {
        if (position === 0) {
            this.props.navigator.push({
              id: 0
            })
        }
    };
    
    searchForecastParent = (place) => {
        var component = this;
        this.setState({place:place});
        let weatherUrl = Api.getWeatherOrForecastFromCityAndCountry(place, 'US', 'weather');
        
        fetch(weatherUrl, {
            method: 'get'
        }).then (function (response) {
            return response.json();
        }).then (function (data) {alert(data);
            component.setState({placeWeather: data});  
        }).catch (function(err) {
            alert(err);
        });
    };
    
    render() {
        
        if (!this.state.placeWeather) {
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
                            <DateComponent abbrDay="Fri" day='10' month='January' year='2017'/>
                            <CurrentWeatherComponent 
                                description='clear sky'
                                currentTemperature={this.state.placeWeather.main.temp}
                                min={this.state.placeWeather.main.temp_min}
                                max={this.state.placeWeather.main.temp_max}/>
                        </View>
                        <View style={Style.nextDaysView}>
                            <NextDaysComponent description="clear sky" min="19"
                            max="25" abbrDay="Sat"/>
                            <NextDaysComponent description="clear sky" min="17"
                            max="22" abbrDay="Sun"/>
                            <NextDaysComponent description="clear sky" min="17"
                            max="24" abbrDay="Mon"/>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
}