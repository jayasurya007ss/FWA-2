import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export function AdminDiagnostics({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Diagnostics</Text>

      <Text style={styles.lable}>Modem</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>Mobile Number (MDN) :</Text>
      <Text style={styles.lable1}>IMEI :</Text>
      <Text style={styles.lable1}>IMSI :</Text>
      <Text style={styles.lable1}>FW Version :</Text>
      <Text style={styles.lable1}>ICCID :</Text>

      <Text style={styles.lable2}>5G Network</Text>
      <Text style={styles.h3}></Text>
      <Text style={styles.lable3}>Status :</Text>
      <Text style={styles.lable3}>Technology :</Text>
      <Text style={styles.lable3}>Band :</Text>
      <Text style={styles.lable3}>Network Operator :</Text>
      <Text style={styles.lable3}>Signal Strength :</Text>
      <Text style={styles.lable3}>Roaming :</Text>
      <Text style={styles.lable3}>Cell ID (ECGI) :</Text>




    </View>

  );
}

export default AdminDiagnostics;
const styles = StyleSheet.create({


  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 30,

  },
  // Diagnostics
  h1: {
    textDecorationLine: 'underline',
    left: '35%',
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

  //                             Modem
  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 15,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  //                Mobile Number,IMEI,FW Version,ICCID
  lable1: {
    color: '#FFFFFF',
    fontSize: 15,
    top: 10,
    marginLeft: 10,
    padding: 0,
    textAlign: 'auto',
    marginBottom: 15,

  },

  // 5G Network
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

  // Status,Techonology,Band,Network Operator,Signal Strength,Romaing,Cell ID (ECGI)
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


