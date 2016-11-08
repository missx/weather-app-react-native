import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
    StyleSheet,
    ToolbarAndroid,
    TouchableHighlight
} from 'react-native'; 

export default class HomeComponent extends Component {
    _navigateToSearch(){
        this.props.navigator.push({
          id: 1
        })
    }
    
    render() {
        return(
            <View>
                <ToolbarAndroid
                  title={this.props.title} />
                <Text>Home</Text>
            <TouchableHighlight onPress={this._navigateToSearch.bind(this)}>
          <Text>Navigate to second screen</Text>
        </TouchableHighlight>
            </View>
        );
    }
}