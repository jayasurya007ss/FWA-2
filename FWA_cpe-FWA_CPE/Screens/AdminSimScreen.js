import React from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, } from 'react-native';

const Apps = () => {
  const [text, onChangeText] = React.useState('');

  let [isEnabled, setIsEnabled] = React.useState(false);
  let toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (

    <View style={styles.container}>
      <Text style={styles.h1}>SIM</Text>

      <Text style={styles.lable}>SIM Settings</Text>
      <Text style={styles.h2}></Text>

      <Text style={styles.lable1}>For additional security, the sim card can be
        locked with pin code.</Text>

      <Text style={styles.lable1}>SIM Status:</Text>

      <Text style={styles.lable1}>SIM PIN Lock:</Text>

      <Text style={styles.lable1}>Action:</Text>

      <Text style={styles.lable1}>Current PIN:</Text>

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

      <SafeAreaView>
        <TextInput
          style={styles.text}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>

    </View>

  );
}
export default Apps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 50,

  },
  text: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: '70%',
    bottom: '225%',
  },

  switch: {
    bottom: '9%',
    left: '88%',
    alignItems: 'center',
    justifyContent: 'center',
  },


  h1: {
    textDecorationLine: 'underline',
    left: '45%',
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'

  },
  h2: {
    bottom: '1%',
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

  Save_button: {
    width: 180,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },


});





