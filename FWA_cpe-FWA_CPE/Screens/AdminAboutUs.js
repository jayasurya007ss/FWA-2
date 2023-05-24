import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export function AdminAboutUs({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>About</Text>
      <Text style={styles.h2}></Text>

      <TouchableOpacity style={styles.AdminInternalStatus}
        onPress={() => navigation.navigate('AdminInternalStatus')}>
        <Text style={styles.lable}>Internet Status</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.AdminInternalSessions}
        onPress={() => navigation.navigate('AdminInternalSessions')}>
        <Text style={styles.lable}>Internet Sessions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.AdminDiagnostics}
        onPress={() => navigation.navigate('AdminDiagnostics')}>
        <Text style={styles.lable}>Diagnostics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.AdminDevicesInfo}
        onPress={() => navigation.navigate('AdminDevicesInfo')}>
        <Text style={styles.lable}>Devices Info</Text>
      </TouchableOpacity>
    </View>

  );
}
export default AdminAboutUs;


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


