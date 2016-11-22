import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image
} from 'react-native'; 
import Style from './CurrentWeatherComponentStyle';
import GeneralStyles from '../GeneralStyles';
import Utils from '../../utils/js/utils';

export default class CurrentWeatherComponent extends Component {
    
    render() {
        return(
            <View style={Style.view}>
                <Image
                    style={Style.image}
                    source={{uri: Utils._findCorrespondingWeatherImg(this.props.description)}}
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

    
}