import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './components/Home/Home.js';


var RouteMapper = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
  console.log(route);
  console.log("WTF");
  if (route.name === 'home') {
    return (
      <Home navigator={navigationOperations} />
    );
  } else{
    return (
      <View style={{flex: 1}}>
        <Text>404</Text>
      </View>
    );
  }
};


export default RouteMapper
