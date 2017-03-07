import React,  { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class Profile extends Component {
  static get defaultProps() {
    return {
      title: 'Profile'
    };
  }

  render() {
    return (
      <View style={styles.profile}>
        <Text>This is the new {this.props.title} View.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
