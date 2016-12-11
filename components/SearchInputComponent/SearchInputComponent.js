import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TextInput
} from 'react-native'; 
import Style from './SearchInputComponentStyle'; 

export default class SearchInputComponent extends Component {
    render() {
        return(
            <View>
                <Text style={Style.text}>Enter place:</Text>
                <TextInput
                    onEndEditing={(event) => this._findLocation(event.nativeEvent.text)}>
            
                </TextInput>
            </View>
        );
    }

    _findLocation(location) {
        
    }
}