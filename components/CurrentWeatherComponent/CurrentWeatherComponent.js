import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image
} from 'react-native'; 
import Style from './CurrentWeatherComponentStyle';
import GeneralStyles from '../GeneralStyles';

export default class CurrentWeatherComponent extends Component {
    render() {
        return(
            <View style={Style.view}>
                <Image
                    style={Style.image}
                    source={{uri: this._findCorrespondingWeatherImg(this.props.description)}}
                />
                <View>
                    <Text
                        style={[Style.currentTemp, GeneralStyles.font]}>
                        {this.props.currentTemperature} C°
                    </Text>
                </View>
                <View>
                    <Text
                        style={[Style.minMax, GeneralStyles.font]}>
                        {this.props.min} C° - {this.props.max} C°
                    </Text>
                </View>    
            </View>
        );
    }

    _findCorrespondingWeatherImg = (weatherDescription) => {
        var image;
        switch(weatherDescription){
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
    }
}