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
                    source={{uri: Utils.getImageUrl(this.props.imageCode)}}
                />
                <View>
                    <Text
                        style={[Style.currentTemp, GeneralStyles.font]}>
                        {Utils.getWholeNr(this.props.currentTemperature)} C°
                    </Text>
                </View>
                <View>
                    <Text
                        style={[Style.minMax, GeneralStyles.font]}>
                        {Utils.getWholeNr(this.props.min)} C° / {Utils.getWholeNr(this.props.max)} C°
                    </Text>
                </View>    
            </View>
        );
    }

    
}