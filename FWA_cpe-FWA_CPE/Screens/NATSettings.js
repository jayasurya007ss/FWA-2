import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput,useState,Switch } from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const [text, onChangeText] = React.useState('');
  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  return (
    
    <View style={styles.container}>
       
      <Text style={styles.lable}>IP :</Text>
      <Text style={styles.lable}>Private Port :</Text>
      <Text style={styles.lable}>Global Port :</Text>
      <Text style={styles.lable}>Protocol :</Text>
      
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder=""
        />
        <TextInput
          style={styles.input1}
          onChangeText={onChangeText1}
          value={text1}
          placeholder=""
        />
        <TextInput
          style={styles.input2}
          onChangeText={onChangeText2}
          value={text2}
          placeholder=""
        />
        <TextInput
          style={styles.input3}
          onChangeText={onChangeText3}
          value={text3}
          placeholder=""
        />
      </SafeAreaView>

      <Text style={styles.lable1}>MobileAP NAT Configuration Page</Text>
      <Text style={styles.h1}></Text>

      
      <Text style={styles.lable2}>Select NAT Type	:</Text>
      <Text style={styles.lable2}>IPSEC VPN Pass Through :</Text>
      <Text style={styles.lable2}>PPTP VPN Pass Through :</Text>
      <Text style={styles.lable2}>L2TP VPN Pass Through :</Text>
      <Text style={styles.lable2}>Webserver WWAN Access :</Text>
      <Text style={styles.lable2}>DMZ IP :</Text>
      <Text style={styles.lable2}>NAT entry generic Time Out :</Text>
      <Text style={styles.lable2}>NAT entry ICMP Time Out :</Text>
      <Text style={styles.lable2}>NAT entry TCP established Time Out :</Text>
      <Text style={styles.lable2}>NAT entry UDP Time Out :</Text>

      <View style={styles.switch}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>

  );
}
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
  lable: {

    color: '#FFFFFF',
    fontSize: 17,
    top: 20,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },
  input: {
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 33,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: '30%',
    bottom: '72%',
  },

  input1: {
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 33,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: '30%',
    bottom: '78%',
  },

  input2: {
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 33,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: '30%',
    bottom: '84%',
  },

  input3: {
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 33,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    left: '30%',
    bottom: '91%',
  },

  lable1: {
    color: '#FFFFFF',
    fontSize: 20,
    bottom: 200,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    fontWeight: 'bold',
  },

  h1:{
    backgroundColor: '#FFFFFF',
    color: '#FFFFFF',
    width:'100%',
    height:3,
   bottom:'23%',
  },

  lable2: {

    color: '#FFFFFF',
    fontSize: 17,
    bottom: 200,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },
 
});


