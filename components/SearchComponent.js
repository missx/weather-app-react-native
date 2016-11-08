import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
    StyleSheet,
    ToolbarAndroid
} from 'react-native'; 

export default class SearchComponent extends Component {
    
    render() {
        return(
            <View>
                <ToolbarAndroid
                  title={this.props.title} />
                <Text>Search Location</Text>
            </View>
        );
    }
}