/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {login, getUsers} from './src/api/login';

const styleSheet = StyleSheet.create({
  inputText: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  button: {
    backgroundColor: 'white',
    padding: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default class App extends React.Component {
  state = {email: '', password: '', token: null};

  onPressLogin = () => {
    login(this.state.email, this.state.password).then(result => {
      if (result.data.login.token) {
        this.setState({
          token: result.data.login.token,
        });
        Alert.alert('Login efetuado');
        console.log(result.data.login.token);
      } else {
        Alert.alert('Credenciais Inválidas');
      }
    });
  };

  getUsers = () => {
    getUsers(this.state.token).then(result => {
      console.log(result);
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 16,
          backgroundColor: '#111111',
        }}>
        <Image
          source={require('./src/logo.png')}
          style={{
            height: Dimensions.get('window').height * 0.2,
            width: Dimensions.get('window').width * 0.5,
            alignSelf: 'center',
          }}
          resizeMode="center"
        />
        <Text style={styleSheet.label}>Email</Text>
        <TextInput
          style={styleSheet.inputText}
          placeholderTextColor="white"
          placeholder="Digite seu email"
          value={this.state.email}
          keyboardType="email-address"
          onChangeText={email => {
            this.setState({email});
          }}
        />
        <Text style={styleSheet.label}>Senha</Text>
        <TextInput
          style={styleSheet.inputText}
          placeholderTextColor="white"
          placeholder="Digite sua senha"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => {
            this.setState({password});
          }}
        />
        <TouchableOpacity style={styleSheet.button} onPress={this.onPressLogin}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styleSheet.button, {flex: 1, marginRight: 8}]}
            onPress={() => {}}>
            <Text style={{}}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styleSheet.button, {flex: 1}]}
            onPress={this.getUsers}>
            <Text>GET USERS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
