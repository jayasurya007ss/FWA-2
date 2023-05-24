import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function AdvanceScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.h1}>Advance Settings</Text>
      <Text style={styles.h2}></Text>

      <TouchableOpacity onPress={() => navigation.navigate('WWANSettings')}>
        <Text style={styles.lable}>WWAN Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity   onPress={() => navigation.navigate('NATSettings')}>
        <Text style={styles.lable}>NAT Settings</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('FIREWALLSettings')}>
        <Text style={styles.lable}>FIREWALL Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('WLANSettings')}>
        <Text style={styles.lable}>WLAN Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('UPNP_DLNA_MDNS')}>
        <Text style={styles.lable}>UPNP_DLNA_MDNS Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ACCOUNTSettings')}>
        <Text style={styles.lable}>ACCOUNT Settings</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.AdminSLanScreen}
        onPress={() => navigation.navigate('AdminLanScreen')}>
        <Text style={styles.lable}>logout</Text>
      </TouchableOpacity> */}
    </View>


  );
}

export default AdvanceScreen;
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



