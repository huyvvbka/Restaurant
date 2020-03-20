import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName:'',
      phoneNumber:'',
      email: '',
      password: '',
    }
  }
  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Create new account</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              textContentType="name"
              keyboardType="name-phone-pad"
              placeholder="Full name"
              autoFocus={true}
              onChangeText={text => this.setState({fullName: text})}
              value={this.state.fullName}>
            </TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              textContentType='telephoneNumber'
              keyboardType="name-phone-pad"
              placeholder="Phone number"
              onChangeText={text => this.setState({fullName: text})}
              value={this.state.fullName}></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              textContentType='emailAddress'
              keyboardType='email-address'
              placeholder='Enter your email'
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.username}></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={text => this.setState({password: text})}
              value={this.state.password}></TextInput>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={this.login}>
            <Text style={styles.loginButtonTitle}>Sign up</Text>
          </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black',
  },
  textOR: {
    flex: 1,
    textAlign: 'center',
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(247,246,255,0.8)',
    borderRadius: 25,
    borderWidth: 0.5,
  },
  textInput: {
    width: 280,
    height: 45,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 200,
  },
  title: {
    fontSize: 24,
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
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    marginBottom: 10,
  },
});
