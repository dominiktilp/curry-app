import React, { Component } from 'react';
import {
  StyleSheet,
  ToolbarAndroid
} from 'react-native';

class TopBar extends ToolbarAndroid {
  render() {
    return (
      <ToolbarAndroid
        title="AwesomeApp"
        actions={[{title: 'Settings', icon: require('./icon_settings.png'), show: 'always'}]}
        onActionSelected={this.onActionSelected} />
    )
  }
  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }
}
