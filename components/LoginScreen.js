import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import {
  LoginManager,
  AccessToken
} from 'react-native-fbsdk'
import firebase from 'react-native-firebase'
export default class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  login = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email.trim(), this.state.password)
      .then(() => {
        this.props.navigation.navigate('Main');
      }).catch((error) => {
        this.setState({
          errorMessage: error.message
        });
      });
  }

  loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          return Promise.reject(new Error('The user canlled request'));
        }
        return AccessToken.getCurrentAccessToken();
      })
      .then((data) => {
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        return firebase.auth().signInWithCredential(credential);
      })
      .then((currentUser) => {
        this.props.navigation.navigate('OnBoardingScreen');
      })
      .catch((error) => {
        alert('Login failed with error: ' + error.message);
      });
  }

  render() {
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    };
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Enter your email"
                autoFocus={true}
                onChangeText={text => this.setState({email: text})}
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
              <Text style={styles.loginButtonTitle}>Login</Text>
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
            <TouchableOpacity style={styles.facebookButton} onPress={this.loginWithFacebook}>
              <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
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
