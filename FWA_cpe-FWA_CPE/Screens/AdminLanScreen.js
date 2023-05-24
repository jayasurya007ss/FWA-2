import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text, TouchableOpacity } from 'react-native';

const App = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>LAN</Text>

      <Text style={styles.lable}>IPv4</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>IP passthrough is always used. IP address assigned is of the computer.</Text>
      <Text style={styles.lable1}>IP Address:</Text>

      <Text style={styles.lable2}>IPv6</Text>
      <Text style={styles.h3}></Text>
      <Text style={styles.lable3}>Turn on IPv6:</Text>


      <Text style={styles.lable3}>Link-Local Address</Text>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.Save_button}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate('AdvanceSettings')}>
        <Text style={styles.advance_button}>Advance Settings</Text>
      </TouchableOpacity>


    </View>


  );
};
export default App;

const styles = StyleSheet.create({


  switch: {

    bottom: '7.5%',
    left: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    left: '43%',
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
    fontSize: 17,
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
    top: 30,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  h3: {
    top: 5,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 3

  },


  lable3: {

    color: '#FFFFFF',
    fontSize: 17,
    top: 20,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },


  Save_button: {
    width:  190,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },

  advance_button: {
    width: 190,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    top:  '100%',
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },
});


