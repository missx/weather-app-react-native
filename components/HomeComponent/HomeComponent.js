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
import Style from './HomeComponentStyle'

export default class HomeComponent extends Component {
    
    
    _onActionSelected = (position) => {
        if (position === 0) {
            this.props.navigator.push({
              id: 1
            })
        }
    }
    
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