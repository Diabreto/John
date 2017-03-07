import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Main from './Main.js'

export default class SignIn extends Component {
  _goToMain = () => {
    this.props.navigator.push({
      title: 'MainPage',
      component: Main,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 3}}>
          <Image
            style={styles.logo}
            source={require('./img/logo.png')}/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>Diabeto</Text>
          <TextInput style={styles.input}
            autoCapitalize='none'
            placeholder="Username" />
          <TextInput style={styles.input}
            autoCapitalize='none'
            placeholder="Password"
            secureTextEntry />
          <TouchableHighlight
            style={styles.submit}
            onPress={this.props.onSignIn}>
            <Text style={styles.text}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
    width: 200,
    height: 200,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  input: {
    margin: 10,
    padding: 10,

    height: 30,
    width: 200,

    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
  },
  submit: {
    margin: 10,
    height: 30,
    width: 200,

    borderColor: 'dodgerblue',
    borderWidth: 1,
    borderRadius: 5,

    backgroundColor: 'dodgerblue'
  },
  text: {
    padding: 5,

    textAlign: 'center',
    fontSize: 15,
    color: 'white'
  }
})
