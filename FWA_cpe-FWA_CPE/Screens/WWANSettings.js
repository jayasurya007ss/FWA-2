import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text, TouchableOpacity } from 'react-native';

const App = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);


  return (
    <View style={styles.container}>
      <Text style={styles.h1}>WWAN Settings</Text>
      <Text style={styles.h2}></Text>


      <Text style={styles.lable}>Auto-connect</Text>
      <Text style={styles.lable}>Roaming</Text>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.switch1}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.Refresh_button}>Refresh</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.Update_button}>Update</Text>
      </TouchableOpacity>

      <Text style={styles.lable1}>Options</Text>
      <Text style={styles.h3}></Text>

      <TouchableOpacity onPress={() => navigation.navigate('IPv4Settings')}>
      <Text style={styles.IPv4_button}>IPv4 Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity   onPress={() => navigation.navigate('IPv6Settings')}>
      <Text style={styles.IPv6_button}>IPv6 Settings</Text>
      </TouchableOpacity>
    </View>


  );
};
export default App;

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
    left: 10,
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

  //                             CurrentSoftware
   lable: {

    color: '#FFFFFF',
    fontSize: 17,
    top: 20,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },
  switch: {

    bottom: '8.5%',
    left: '87%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch1: {

    bottom: '9.2%',
    left: '87%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Refresh_button: {
    width:  120,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },

  Update_button: {
    width:  120,
    textAlign: 'center',
    left: 260,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 80,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },

    // Options
 

  lable1: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    bottom: 55,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },

  h3: {
    bottom: 80,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 3

  },

  IPv4_button: {
    width:  190,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
   bottom: 50,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },

  IPv6_button: {
    width:  190,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
   bottom: 30,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },
});


