import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
    StyleSheet,
    ToolbarAndroid,
    ScrollView
} from 'react-native';
import Style from './SearchComponentStyle';

export default class SearchComponent extends Component {
    
    _onActionSelected = (position) => {
        if (position === 0) {
            this.props.navigator.push({
              id: 0
            })
        }
    }
    
    render() {
        return(
            <View>
                <ToolbarAndroid
                    logo={require('../../utils/imgs/Weather.png')}
                    title={this.props.title} 
                    actions={[{title: 'Current location', icon: require('../../utils/icons/gps-signal.png'), show: 'always', showWithText: false}]}
                    onActionSelected={this._onActionSelected} 
                    style={Style.toolbar}/>
                <Text>Search Location</Text>
                <ScrollView>
                </ScrollView>
            </View>
        );
    }
}