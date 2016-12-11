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
import SearchInputComponent from '../SearchInputComponent/SearchInputComponent';
import GeneralStyles from '../GeneralStyles';

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
            <View style={GeneralStyles.background}>
                <ToolbarAndroid
                    logo={require('../../utils/imgs/Weather.png')}
                    title={this.props.title} 
                    actions={[{title: 'Current location', icon: require('../../utils/icons/gps-signal.png'), show: 'always', showWithText: false}]}
                    onActionSelected={this._onActionSelected} 
                    style={Style.toolbar}/>
                <ScrollView style={GeneralStyles.mainComponent}>
                    <SearchInputComponent/>
                </ScrollView>
            </View>
        );
    }
}