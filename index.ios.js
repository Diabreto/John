import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TabBarIOS,
  Navigator,
  View
} from 'react-native';
import SignIn from './components/SignIn';
import Main from './components/Main';

export default class John extends Component {
  static title = 'John';
  static description = 'Diabetes Companion App';
  static displayName = 'John';

  render() {
    return (
      <Navigator
        initialRoute={{
          title: 'SignIn',
          component: SignIn,
          index: 0,
          navigationBarHidden: true
        }}
        renderScene={(route, navigator) => {
          if (route.title === 'SignIn') {
            return <SignIn
              onSignIn = {() => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Main',
                  component: Main,
                  navigationBarHidden: true,
                  index: nextIndex,
                });
              }}
            />
          } else if(route.title == 'Main') {
            return <Main />
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('John', () => John);
