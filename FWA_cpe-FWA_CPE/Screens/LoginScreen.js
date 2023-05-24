import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function LoginScreen({ navigation }) {

  return (

    <View style={styles.container}>
      <Text style={styles.text}>HFCL</Text>
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => navigation.navigate('User')} >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'relative',
  
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: '100%',
    left: '25%',
    backgroundColor: "#333281",

  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },

  /* HFCL Text*/
  text: {
    color: '#333281',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: '5%',
    width: '100%',
  },
});

