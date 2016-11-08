

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';
import HomeComponent from './components/HomeComponent';
import SearchComponent from './components/SearchComponent';

export default class WeatherApp extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{id:0}}
                renderScene={this._navigatorRenderScene}
            />  
        );
    }
    
    _navigatorRenderScene(route, navigator) { 
        switch (route.id) {
            case 0:
                return(<HomeComponent navigator={navigator} title='Home'/>);
            case 1:
                return(<SearchComponent navigator={navigator} title='Search Location'/>);
        }
    }
}


AppRegistry.registerComponent('WeatherApp', () => WeatherApp);
