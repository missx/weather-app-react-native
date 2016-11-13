import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
} from 'react-native'; 
import Styles from './DateComponentStyle';
import GeneralStyles from '../GeneralStyles';


export default class DateComponent extends Component {
   
    
    render() {
        return(
            <View>
               <Text style={[Styles.dateText, GeneralStyles.font]}>{this.props.day} {this.props.month}, {this.props.year}</Text> 
            </View>
        );
    }
}