import React, { Component } from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default class LandingScreen extends Component{
  render () {
      return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../images/BrowserFood.png')}
          />
          <Text style={styles.title}>Welcom to our restaurant</Text>
          <Text style={styles.content}>
            Order food and make reservations width one click
          </Text>
          <TouchableOpacity style={styles.loginButton} onPress={this.login}>
            <Text style={styles.loginButtonTitle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={this.login}>
            <Text style={styles.loginButtonTitle}>Sign up</Text>
          </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 200,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5EA33A',
  },
  content: {
    width: 250,
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5EA33A',
    marginBottom: 10,
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white',
  },
  signupButton: {
    width: 300,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5EA33A',
    marginBottom: 10,
  },
});
