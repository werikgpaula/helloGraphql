/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'yellow',
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View
        style={[{ flex: 1, flexDirection: 'row' }, styles.body]}>
        <View >
          <Text>Oi</Text>
        </View>
      </View>
    );
  }
}

