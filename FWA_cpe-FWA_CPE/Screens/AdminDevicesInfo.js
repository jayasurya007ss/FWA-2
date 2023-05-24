import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export function AdminDevicesInfo({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>DevicesInfo</Text>

      <Text style={styles.lable}>General</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>Manufacture :  HFCL</Text>
      <Text style={styles.lable1}>Modal :  FWA-CPE2023</Text>
      <Text style={styles.lable1}>Device Version :  V0.1</Text>



      <Text style={styles.lable2}>Software Component</Text>
      <Text style={styles.h3}></Text>
      <Text style={styles.lable3}>OS Version :</Text>
      <Text style={styles.lable3}>Modem Firmware Version :</Text>
      <Text style={styles.lable3}>Web UI Version :  V0.1</Text>
      <Text style={styles.lable3}>Hardware Version :  V0.1</Text>






    </View>

  );
}

export default AdminDevicesInfo;

const styles = StyleSheet.create({


  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 30,

  },
  // DevicesInfo
  h1: {
    textDecorationLine: 'underline',
    left: 100,
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'

  },
  h2: {
    bottom: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 3

  },

  //                           General
  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 15,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  //                 Manufacture,Model,Device Version
  lable1: {
    color: '#FFFFFF',
    fontSize: 15,
    top: 10,
    marginLeft: 10,
    padding: 0,
    textAlign: 'auto',
    marginBottom: 15,

  },

  // Software Compenents
  lable2: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 5,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  h3: {
    bottom: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 3

  },

  //  OS Version,Modem Firmware Version,Web UI Version,Hardware Version 
  lable3: {

    color: '#FFFFFF',
    fontSize: 15,
    top: 0,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },

});


