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
                    source={{uri: Utils.getImageUrl(this.props.imageCode)}}
                />
                <Text
                    style={[Style.minMax, GeneralStyles.font]}>
                    {Utils.getWholeNr(this.props.min)} C° - {Utils.getWholeNr(this.props.max)} C°
                </Text>
            </View>
        );
    }
}