import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function AdminAdvanceScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.h1}>Advance</Text>
      <Text style={styles.h2}></Text>

      <TouchableOpacity onPress={() => navigation.navigate('AdminCellularScreen')}>
        <Text style={styles.lable}>Cellular</Text>
      </TouchableOpacity>
      <TouchableOpacity   
        onPress={() => navigation.navigate('AdminDNSScreen')}>
        <Text style={styles.lable}>Manual DNS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AdminSimScreen')}>
        <Text style={styles.lable}>SIM</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AdminLanScreen')}>
        <Text style={styles.lable}>LAN</Text>
      </TouchableOpacity>

    </View>

  );
}

export default AdminAdvanceScreen;
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
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'
  },
  h2: {
    top: 10,
    width: 3250,
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
});



