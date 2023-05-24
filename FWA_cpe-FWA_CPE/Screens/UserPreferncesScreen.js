


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export function UserPreferncesScreen({ }) {



  return (
    <View style={styles.container}>

      <Text style={styles.h1}>Prefernces</Text>

      <Text style={styles.lable}>User Prefernces</Text>
      <Text style={styles.h2}></Text>







    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 20,

  },
  h1: {
    textDecorationLine: 'underline',
    left: 100,
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'

  },


  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 15,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  h2: {
    bottom: 10,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },
});

export default UserPreferncesScreen;
