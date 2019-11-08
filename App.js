/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import login from './src/api/login';

export default class App extends React.Component {
  state = { email: '', password: '', token: null };

  onPressLogin = () => {
    login(this.state.email, this.state.password)
  };

  render() {
    return (
      <View style={{ paddingTop: 150, flex: 1, backgroundColor: 'white' }}>
        <Text
          style={{
            fontSize: 35,
            textAlign: 'center',
            paddingBottom: 50,
          }}>
          OdhenPos
        </Text>
        <TextInput
          style={{ borderColor: 'white', borderWidth: 1, padding: 11 }}
          placeholder="Digite seu email"
          value={this.state.email}
          keyboardType="email-address"
          onChangeText={email => {
            this.setState({ email });
          }}
        />
        <TextInput
          style={{ borderColor: 'black', borderWidth: 1, padding: 11 }}
          placeholder="Digite sua senha"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => {
            this.setState({ password });
          }}
        />
        <View style={{ flexDirection: 'row', padding: 2 }}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => { }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                height: '25%',
                width: '99%',
                backgroundColor: '#2196F3',
              }}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={this.onPressLogin}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                height: '25%',
                width: '99%',
                backgroundColor: '#2196F3',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
