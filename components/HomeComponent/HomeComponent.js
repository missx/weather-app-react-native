import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
    StyleSheet,
    ToolbarAndroid,
    TouchableHighlight
} from 'react-native'; 
import LocationComponent from '../LocationComponent/LocationComponent';
import DateComponent from '../DateComponent/DateComponent';
import GeneralStyles from '../GeneralStyles';
import Style from './HomeComponentStyle'

export default class HomeComponent extends Component {
    _navigateToSearch(){
        this.props.navigator.push({
          id: 1
        })
    }
    
    _onActionSelected() {
        if (position === 0) {
            _navigateToSearch();
        }
    }
    
    render() {
        return(
            <View>
                <ToolbarAndroid
                    logo={require('../../utils/imgs/Weather.png')}
                    title={this.props.title} 
                    actions={[{title: 'Search Location', icon: require('../../utils/icons/search.png'), show: 'always', showWithText: false}]}
                    onActionSelected={this._onActionSelected} 
                    style={Style.toolbar}/>
            
                <LocationComponent location='Montevideo, Uruguay'/>
                <DateComponent day='10' month='January' year='2017'/>
            </View>
        );
    }
}