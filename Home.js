import React,  { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class Home extends Component {
  static get defaultProps() {
    return {
      title: 'Home'
    };
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is the {this.props.title} View.</Text>
      </View>
    )
  }
}
