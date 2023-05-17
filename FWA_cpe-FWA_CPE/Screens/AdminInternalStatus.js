import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

export function AdminInternalStatus({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Internal Status</Text>

      <Text style={styles.lable}>General</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>Status :</Text>
      <Text style={styles.lable1}>Network Name :</Text>
      <Text style={styles.lable1}>Technology :</Text>
      <Text style={styles.lable1}>Time Connected :</Text>
      <Text style={styles.lable1}>Received :</Text>
      <Text style={styles.lable1}>Transmitted :</Text>

      <Text style={styles.lable2}>IPv4</Text>
      <Text style={styles.h3}></Text>
      <Text style={styles.lable3}>IP Address :</Text>
      <Text style={styles.lable3}>Mask :</Text>
      <Text style={styles.lable3}>Gatway :</Text>
      <Text style={styles.lable3}>DNS :</Text>



      <Text style={styles.lable5}>IPv6</Text>
      <Text style={styles.h4}></Text>
      <Text style={styles.lable4}>IP Address :</Text>




    </View>

  );
}


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
    textDecorationLine: 'underline',
    left: 60,
    top: 10,
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'

  },
  h2: {
    bottom: 10,
    width: 400,
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
    fontSize: 13,
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
    top: 5,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  h3: {
    bottom: 20,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },


  lable3: {

    color: '#FFFFFF',
    fontSize: 13,
    top: 0,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },


  Update_button: {
    width: 190,
    textAlign: 'center',
    left: 100,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 14,
  },

  //    Software Updated,Applied,Description
  lable4: {

    color: '#FFFFFF',
    fontSize: 13,
    bottom: 10,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },

  h4: {
    bottom: 30,
    width: 400,
    backgroundColor: '#FFFFFF',
    height: 3

  },



  //                  Last Software Update
  lable5: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 5,
    bottom: 10,
    padding: 10,
    textAlign: 'auto',
    marginBottom: 10,

  },
});

export default AdminInternalStatus;
