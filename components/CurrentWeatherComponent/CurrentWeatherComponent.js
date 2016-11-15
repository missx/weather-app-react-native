import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image
} from 'react-native'; 
import Style from './CurrentWeatherComponentStyle';

export default class CurrentWeatherComponent extends Component {
    render() {
        return(
            <View>
                <Image
                    style={Style.image}
                    source={{uri: this._findCorrespondingWeatherImg(this.props.description)}}
                />
            </View>
        );
    }

    _findCorrespondingWeatherImg = (weatherDescription) => {
        if (weatherDescription === 'clear sky') {
            return 'http://openweathermap.org/img/w/01d.png';
        }
    }
}