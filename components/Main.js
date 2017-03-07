import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Record from './Record';
import Profile from './Profile';

export default class Main extends Component {
  state = {
    selectedTab: 'home'
  }

  _home = () => {
    return (
      <Home />
    )
  }

  _record = () => {
    return (
      <Record />
    )
  }

  _profile = () => {
    return (
      <Profile />
    )
  }

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title = "Home"
          iconName = "ios-home-outline"
          selectedIconName = "ios-home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          {this._home()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title = "Record"
          iconName = "ios-add-outline"
          selectedIconName = "ios-add"
          selected={this.state.selectedTab === 'record'}
          onPress={() => {
            this.setState({
              selectedTab: 'record',
            });
          }}>
          {this._record()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title = "Profile"
          iconName = "ios-person-outline"
          selectedIconName = "ios-person"
          selected={this.state.selectedTab === 'profile'}
          onPress={() => {
            this.setState({
              selectedTab: 'profile',
            });
          }}>
          {this._profile()}
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}
