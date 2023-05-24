import React, { useState } from 'react';
import { View, Switch, StyleSheet, SafeAreaView, TextInput,Text,TouchableOpacity } from 'react-native';



const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [text, onChangeText] = useState('');
  const [text1, onChangeText1] = useState(''); 
     return (
    <View style={styles.container}>
      <Text style={styles.h1}>DNS</Text>

      <Text style={styles.lable}>Manual DNS</Text>
      <Text style={styles.h2}></Text>

      <Text style={styles.lable1}>Your Gateway automatically selects a Domain Name Server
       (DNS) or you can manually set one.</Text>

      <Text style={styles.lable1}>Turn on manual DNS:</Text>

      <Text style={styles.lable1}>DNS 1 IP address:</Text>
      
      <Text style={styles.lable1}>DNS 2 IP Address:</Text>
      <View>
            
    </View>
      

      <View style={styles.switch}>
       
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.text}
          onChangeText={onChangeText}
          value={text}
        />

      </SafeAreaView>
      <SafeAreaView>
        <TextInput
          style={styles.text1}
          onChangeText={onChangeText1}
          value={text1}
          
        />

      </SafeAreaView>

      <TouchableOpacity>
        <Text style={styles.Save_button}>Save Changes</Text>
      </TouchableOpacity>

    </View>

  );
};

export default App;

const styles = StyleSheet.create({
 
  text: {
    color: '#000000',
    
    textAlign:'center',
    backgroundColor: '#FFFFFF',
    height: 35,
    width:100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: '70%',
    bottom: '240%',
  },

  text1: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    height: 35,
    width:100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: '70%',
    bottom: '270%',
  },

  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 50,

  },
  switch: {
    bottom:'14%',
    left: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },


  // Cellular
  h1: {
    textDecorationLine: 'underline',
    left: 160,
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
  //Save Button
  Save_button: {
    width: 150,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 100,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },
 
 
  


});


