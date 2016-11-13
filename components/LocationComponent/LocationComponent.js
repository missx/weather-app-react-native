import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
} from 'react-native'; 
import Styles from './LocationComponentStyle';
import GeneralStyles from '../GeneralStyles';


export default class LocationComponent extends Component {
   
    
    render() {
        return(
            <View>
                <Text style={[Styles.locationText, GeneralStyles.font]}>{this.props.location}</Text>
            </View>
        );
    }
}