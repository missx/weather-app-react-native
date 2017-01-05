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
                    onSubmitEditing = {(event) => this.findLocation(event.nativeEvent.text)}
                    ref='textInput'
                    autofocus={true}
                     >
                </TextInput>
            </View>
        );
    }

    findLocation(location) {
        this.props.searchForecast(location);
        this.refs.textInput.setNativeProps({text: ''});
        this.refs.textInput.blur();
    }
}