import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

export function AdminDevicesInfo({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>DevicesInfo</Text>

      <Text style={styles.lable}>General</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>Manufacture :</Text>
      <Text style={styles.lable1}>Modal :</Text>
      <Text style={styles.lable1}>Device Version :</Text>
      <Text style={styles.lable1}>SKU :</Text>


      <Text style={styles.lable2}>Software Component</Text>
      <Text style={styles.h3}></Text>
      <Text style={styles.lable3}>OS Version :</Text>
      <Text style={styles.lable3}>Modem Firmware Version :</Text>
      <Text style={styles.lable3}>Web UI Version :</Text>
      <Text style={styles.lable3}>Hardware Version :</Text>
      <Text style={styles.lable3}>PRI Version :</Text>





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
    top: 30,

  },
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
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },

  //                             CurrentSoftware
  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 15,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  //                 Software Version
  lable1: {
    color: '#FFFFFF',
    fontSize: 13,
    top: 10,
    marginLeft: 10,
    padding: 0,
    textAlign: 'auto',
    marginBottom: 15,

  },

  // Checking for Software Update
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
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },


  lable3: {

    color: '#FFFFFF',
    fontSize: 13,
    top: 0,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },

});

export default AdminDevicesInfo;
