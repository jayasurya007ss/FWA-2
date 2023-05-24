import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

export function Support({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Contact us</Text>

      <Text style={styles.h2}></Text>

      <Text style={styles.lable}>To Know more visit HFCL website and get details about the products and
        infrastructure of HFCL</Text>

      <Image
        source={require('../assets/call.png')}
        style={styles.logo1}
      />

      <Text style={styles.lable1}>+91-11-35209400/9500</Text>

      <Image
        source={require('../assets/mail.png')}
        style={styles.logo2}
      />

      <Text style={styles.lable2}>info@hfcl.com</Text>

      <Image
        source={require('../assets/location.png')}
        style={styles.logo3}
      />

      <Text style={styles.lable3}>HFCL Ltd.,10th floor,Embassy Tech Village Blocks I&J,
        Trillium,Outer Ring RD,Bengaluru,Karnataka 560103</Text>

      <Image
        source={require('../assets/google.png')}
        style={styles.logo4}
      />

      <Image
        source={require('../assets/twitter.png')}
        style={styles.logo5}
      />

      <Image
        source={require('../assets/instagram.png')}
        style={styles.logo6}
      />

      <Image
        source={require('../assets/facebook.png')}
        style={styles.logo7}
      />

    </View>

  );
}
export default Support;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 30,

  },
  // About
  h1: {
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'
  },
  h2: {
    top: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 3

  },
  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    top: 30,
    marginLeft: 10,
    padding: 5,
    textAlign: 'auto',
    marginBottom: 10,
  },

  logo1: {
    top: '20%',
    width: 50,
    height: 50,
    marginRight: 10,
    position: 'absolute',
    left: '10%',
  },

  lable1: {
    color: '#FFFFFF',
    fontSize: 20,
    top: 65,
    marginLeft: '25%',
    padding: 5,
    textAlign: 'auto',
  },

  logo2: {
    top: '30%',
    width: 50,
    height: 50,
    marginRight: 10,
    position: 'absolute',
    left: '10%',
  },

  lable2: {
    color: '#FFFFFF',
    fontSize: 20,
    top: '12%',
    marginLeft: '25%',
    padding: 5,
    textAlign: 'auto',
  },

  logo3: {
    top: '40%',
    width: 50,
    height: 50,
    marginRight: 10,
    position: 'absolute',
    left: '10%',
  },
  lable3: {
    color: '#FFFFFF',
    fontSize: 20,
    top: '15%',
    marginLeft: '25%',
    padding: 5,
    textAlign: 'auto',
  },

  logo4: {
    top: '60%',
    width: 50,
    height: 50,
    marginRight: 10,
    position: 'absolute',
    left: '10%',
  },

  logo5: {
    top: '60%',
    width: 50,
    height: 50,
    marginRight: 10,
    position: 'absolute',
    left: '32%',
  },

  logo6: {
    top: '60%',
    width: 50,
    height: 50,
    marginRight: 10,
    position: 'absolute',
    left: '55%',
  },

  logo7: {
    top: '60%',
    width: 50,
    height: 50,
    marginRight: 10,
    position: 'absolute',
    left: '80%',
  },
});


