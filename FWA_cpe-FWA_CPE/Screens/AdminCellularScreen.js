import React, { useState } from 'react';
import { View, Switch, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Cellular</Text>

      <Text style={styles.lable}>Network Selection</Text>
      <Text style={styles.h2}></Text>



      <Text style={styles.lable1}>Allow device to connect to mobile network when roaming.</Text>

      <Text style={styles.lable1}>Network Technology :</Text>
      <Text style={styles.lable1}>Enable automatic network selection.</Text>

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
          thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
      </View>


      <TouchableOpacity>
        <Text style={styles.Network_button}>Select Network Mannually</Text>
      </TouchableOpacity>



      <Text style={styles.lable2}>APN Settings</Text>
      <Text style={styles.h3}></Text>
      <Text style={styles.lable3}>Changing APN may cause loss of data connectivity.</Text>
      <Text style={styles.lable3}>APN:</Text>
      <Text style={styles.lable3}>Authentication</Text>

      <TouchableOpacity>
        <Text style={styles.Save_button}>Save Changes</Text>
      </TouchableOpacity>

      <SafeAreaView>
        <TextInput
          style={styles.text}
          onChangeText={onChangeText}
          value={text}
        />

      </SafeAreaView>






    </View>

  );
};
export default App;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    height: 40,
    width:100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: '65%',
    bottom: '345%',
  },

  switch: {
    bottom: '14.5%',
    left: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  switch1: {
    bottom: '11%',
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
  // Cellular
  h1: {
    textDecorationLine: 'underline',
    left:  '40%',
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

  //                            Network Selection
  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 15,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  //                 Allow device to connect when data romaing
  //                          Network Technology
  //                Enable automatic network selection
  lable1: {
    color: '#FFFFFF',
    fontSize: 17,
    top: 0,
    marginLeft: 10,
    padding: 0,
    textAlign: 'auto',
    marginBottom: 15,

  },
  //                            Select Network Mannually
  Network_button: {
    width: 250,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 90,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },
  // APN Settings
  lable2: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    bottom: 80,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  h3: {
    bottom: 105,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 3

  },
  //                                                APN,Authentication

  lable3: {

    color: '#FFFFFF',
    fontSize: 17,
    bottom: 90,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },

  //                                                  Save Changes
  Save_button: {
    width: 150,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 80,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },

});



