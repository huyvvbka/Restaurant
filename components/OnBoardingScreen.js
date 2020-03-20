import React, {Component} from 'react'
import {Pages} from 'react-native-pages';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class OnBoardingScreen extends Component {
  render() {
    return (
      <Pages>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../images/BrowserFood.png')}
          />
          <Text style={styles.title}>Browse Food</Text>
          <Text style={styles.content}>Welcom to our restaurant App! Login and check out our delicious food</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../images/Delivery.png')}
          />
          <Text style={styles.title}>Order Food</Text>
          <Text style={styles.content}>Hungry? Order food in just a few clicks and we'll take care of you...</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../images/MakeReser.png')}
          />
          <Text style={styles.title}>Make Reservations</Text>
          <Text style={styles.content}>Book a table in advance to avoid waiting in line</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../images/QuickSearch.png')}
          />
          <Text style={styles.title}>Quick Search</Text>
          <Text style={styles.content}>Quickly find food items you like the most</Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../images/ApplePay.png')}
          />
          <Text style={styles.title}>Apple Pay</Text>
          <Text style={styles.content}>We know you're busy, so you can pay with yourn phone in just one click</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </Pages>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5EA33A',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    width: 250,
    textAlign: 'center'
  },
  button: {
    width: 80,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'blue',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
