import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>General Info Status</Text>

      <Text style={styles.lable}>SIM Status</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>SIM 1 (IMSI - 123456789,Active)</Text>
      <Text style={styles.lable1}>Carrier :</Text>
      <Text style={styles.lable1}>ICCID :</Text>
      <Text style={styles.lable1}>IMSI :</Text>
      <Text style={styles.lable1}>MDN :</Text>
      <Text style={styles.lable1}>APN :</Text>
      <Text style={styles.lable1}>ECGI :</Text>
      <Text style={styles.lable1}>PCI :</Text>
      <Text style={styles.lable1}>RSRP :</Text>
      <Text style={styles.lable1}>RSRQ :</Text>
      <Text style={styles.lable1}>SNR :</Text>

      <Text style={styles.h3}></Text>

      <Text style={styles.lable2}>General</Text>
      <Text style={styles.h4}></Text>
      <Text style={styles.lable3}>Technology :</Text>
      <Text style={styles.lable3}>Band :</Text>
      <Text style={styles.lable3}>Band Width :</Text>
      <Text style={styles.lable3}>WAN :</Text>
      <Text style={styles.lable3}>SIM:</Text>
      <Text style={styles.lable3}>FW :</Text>
      <Text style={styles.lable3}>IPv4 :</Text>
      <Text style={styles.lable3}>IMEI :</Text>
      <Text style={styles.lable3}>MAC :</Text>



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
    top: 50,

  },
  h1: {
    textDecorationLine: 'underline',
    left: 60,
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'

  },

  //                             CurrentSoftware
  lable: {
    textDecorationLine: 'underline',
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
    bottom: 30,
    marginLeft: 15,
    textAlign: 'auto',
    marginBottom: 5,

  },

  // Checking for Software Update
  lable2: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    bottom: 40,
    padding: 15,
    textAlign: 'auto',


  },
  h3: {
    bottom: 30,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },




  lable3: {

    color: '#FFFFFF',
    fontSize: 13,
    bottom: 70,
    marginLeft: 10,

    textAlign: 'auto',
    marginBottom: 5,

  },




});

export default DetailsComponent;
