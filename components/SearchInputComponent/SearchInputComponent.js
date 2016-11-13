import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native'; 

export default class SearchInputComponent extends Component {
    render() {
        return(
            <View>
                <TextInput
                    onEndEditing={(event) => this._findLocation(event.nativeEvent.text)}>
            
                </TextInput>
            </View>
        );
    }

    _findLocation(location) {
        
    }
}