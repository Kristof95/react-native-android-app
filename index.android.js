/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Splash from './Splash';
import Login from './src/components/Login';

export default class Practice01SplashScreen extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('Practice01SplashScreen', () => Practice01SplashScreen);