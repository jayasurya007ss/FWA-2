import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function AdminLogs({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Logs</Text>

      <Text style={styles.lable}>Logs Settings</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>Turn On Logging:</Text>
      <Text style={styles.lable1}>Automatically Clear Log:</Text>

      <TouchableOpacity>
        <Text style={styles.Download_button}>Save Changes</Text>
      </TouchableOpacity>

      <Text style={styles.lable2}>Mobile Network Log</Text>
      <Text style={styles.lable3}>Device Log</Text>


      <TouchableOpacity>
        <Text style={styles.Refersh_button}>Refersh</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.Clear_button}>Clear Log</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.Log_button}>Expert Log</Text>
      </TouchableOpacity>

    </View>




  );
}
export default AdminLogs;


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
    textDecorationLine: 'underline',
    left: 150,
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
  Download_button: {
    width: 140,
    textAlign: 'center',
    left: 10,
    top: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
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
    textDecorationLine: 'underline',
    fontSize: 17,
    top: 30,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },



  lable3: {

    color: '#FFFFFF',
    fontSize: 17,
    textDecorationLine: 'underline',
    bottom: 10,
    left: 290,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },
  Refersh_button: {
    width: 80,
    textAlign: 'center',
    left: 10,
    top: 250,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },
  Clear_button: {
    width: 100,
    textAlign: 'center',
    left: 120,
    top: 220,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },
  Log_button: {
    width: 100,
    textAlign: 'center',
    left: 290,
    top: 190,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },
});

