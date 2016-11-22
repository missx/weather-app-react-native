import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
    StyleSheet,
    Image
} from 'react-native';
import Style from './NextDaysComponentStyle';
import GeneralStyles from '../GeneralStyles';
import Utils from '../../utils/js/utils';

export default class NextDaysComponent extends Component {
    
    
    render() {
        return(
            <View style={Style.mainView}>
                <Text
                    style={[Style.minMax, GeneralStyles.font]}>
                    {this.props.abbrDay}
                </Text>
                <Image
                    style={Style.image}
                    source={{uri: Utils._findCorrespondingWeatherImg(this.props.description)}}
                />
                <Text
                    style={[Style.minMax, GeneralStyles.font]}>
                    {this.props.min} C° - {this.props.max} C°
                </Text>
            </View>
        );
    }
}