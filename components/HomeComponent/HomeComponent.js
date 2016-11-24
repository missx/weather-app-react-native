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
    
    state = {
        currentLocation: {},
        currentLocationForecast: {}
    };
    
    constructor(props) {
        super(props);
        
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
    
    _onActionSelected = (position) => {
        if (position === 0) {
            this.props.navigator.push({
              id: 1
            })
        }
    };
    
    getCurrentForecast = () => {
        console.log(this.state.currentLocation);
        let splitLat = this.state.currentLocation.coords.latitude;
        let splitLon = this.state.currentLocation.coords.longitude;
        
        let forecast = Api.getForecastFromCoordinates(splitLat, splitLon);
        this.setState({currentLocationForecast: forecast});
        
        console.log('forecast', this.state.currentLocationForecast);
    };
    
    render() {
        return(
            <View style={GeneralStyles.background}>
                <ToolbarAndroid
                    logo={require('../../utils/imgs/Weather.png')}
                    title={this.props.title} 
                    actions={[{title: 'Search Location', icon: require('../../utils/icons/search.png'), show: 'always', showWithText: false}]}
                    onActionSelected={this._onActionSelected} 
                    style={Style.toolbar}/>
                <ScrollView style={Style.main}>
                    <View style={Style.currentDayView}>
                        <LocationComponent location='Montevideo, Uruguay'/>
                        <DateComponent abbrDay="Fri" day='10' month='January' year='2017'/>
                        <CurrentWeatherComponent 
                            description='clear sky'
                            currentTemperature='22'
                            min='18'
                            max='24'/>
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