import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export function UserBackupScreen({ navigation }) {
  const [text, onChangeText] = React.useState('');
  const [text1, onChangeText1] = React.useState('');
  // const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Backup and Restore</Text>

      <Text style={styles.lable}>Backup Configurations</Text>
      <Text style={styles.h2}></Text>
      <Text style={styles.lable1}>Save your Gateway configuration settings to your device. </Text>
      <Text style={styles.lable1}>Admin Password:</Text>
      <View>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Password"

        />
      </View>
      <Text style={styles.note}>Note:You'll be locked out if an incorrect password is used too many times.</Text>
      <TouchableOpacity>
        <Text style={styles.Download_button}>Download</Text>
      </TouchableOpacity>



      <Text style={styles.lable2}>Restore Settings</Text>
      <Text style={styles.h3}></Text>
      <Text style={styles.lable3}>Restore backed up setting from a file on your device.</Text>
      <Text style={styles.lable3}>Admin Password:</Text>
      <View>

        <TextInput
          style={styles.input1}
          onChangeText={onChangeText1}
          value={text1}
          placeholder="Enter Password"

        />
      </View>
      <Text style={styles.note1}>Note:You'll be locked out if an incorrect password is used too many times.</Text>
      <Text style={styles.select}>Select a Files</Text>


      <TouchableOpacity>
        <Text style={styles.Restore_button}>Restore Now</Text>
      </TouchableOpacity>



      <Text style={styles.lable4}>Restore to Factory Defaults</Text>
      <Text style={styles.h4}></Text>
      <Text style={styles.lable5}>Restore all settings to Factory Defaults Values.</Text>

      <TouchableOpacity>
        <Text style={styles.Defaults_button}>Restore Factory Defaults</Text>
      </TouchableOpacity>

      <Text style={styles.lable6}>Restart FWA-CPE2023</Text>
      <Text style={styles.h5}></Text>
      <Text style={styles.lable7}>Restart the FWA-CPE2023.</Text>

      <TouchableOpacity>
        <Text style={styles.Restart_button}>Restart</Text>
      </TouchableOpacity>


    </View>

  );
}
export default UserBackupScreen;

const styles = StyleSheet.create({

  input: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    bottom: 60,
    left: 240,
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 1,
  },
  input1: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    bottom: 130,
    left: 240,
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 1,
  },
  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    top: 50,

  },
  //                                     Backup and Restore
  h1: {
    textDecorationLine: 'underline',
    left: '23%',
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

  //                             Backup Configurations
  lable: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    top: 15,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  //                            Save your Gateway configuration settings to your device.
  //                                            Admin Password
  lable1: {
    color: '#FFFFFF',
    fontSize: 15,
    bottom: 10,
    marginLeft: 10,
    padding: 5,
    textAlign: 'auto',
    marginBottom: 10,
  },

  //                            Note:You'll be locked out if an incorrect password is used too many times
  note: {
    color: '#FFFFFF',
    fontSize: 15,
    bottom: 60,
    marginLeft: 10,
    padding: 5,
    textAlign: 'auto',
    marginBottom: 10,

  },

  Download_button: {
    width: 250,
    textAlign: 'center',
    left: 10,
    bottom: 60,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },

  //                               Restore Settings
  lable2: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 10,
    bottom: 65,
    padding: 15,
    textAlign: 'auto',
    marginBottom: 10,

  },
  h3: {
    bottom: 90,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 3

  },

  //                                  Restore backed up setting from a file on your device
  //                                                  Admin Password
  lable3: {

    color: '#FFFFFF',
    fontSize: 15,
    bottom: 80,
    marginLeft: 10,
    padding: 1,
    textAlign: 'auto',
    marginBottom: 15,

  },

  //                             Note:You'll be locked out if an incorrect password is used too many times
  note1: {

    color: '#FFFFFF',
    fontSize: 15,
    bottom: 130,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },

  //                                                Select a Files
  select: {

    color: '#FFFFFF',
    fontSize: 15,
    bottom: 130,
    marginLeft: 10,
    padding: 1,
    textAlign: 'auto',
    marginBottom: 15,

  },
  //                                          Restore Now
  Restore_button: {
    width: 250,
    textAlign: 'center',
    left: 10,
    height: 30,
    bottom: 130,
    borderRadius: 25,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },




  //                 Restore to Factory Defaults
  lable4: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 5,
    bottom: 130,
    padding: 10,
    textAlign: 'auto',
    marginBottom: 10,

  },
  //   Restore all settings and Factory Defaults
  lable5: {

    color: '#FFFFFF',
    fontSize: 15,
    bottom: 140,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },

  h4: {
    bottom: 150,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 3

  },
  // Restore Factory Defaults
  Defaults_button: {
    width: 250,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 140,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },
  //                 Restart FWA-CPE2023
  lable6: {
    color: '#FFFFFF',
    fontSize: 20,
    right: 5,
    bottom: 130,
    padding: 10,
    textAlign: 'auto',
    marginBottom: 10,

  },
  //    Restart the FWA-CPE2023
  lable7: {

    color: '#FFFFFF',
    fontSize: 15,
    bottom: 140,
    marginLeft: 10,
    padding: 2,
    textAlign: 'auto',
    marginBottom: 15,

  },

  h5: {
    bottom: 150,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 3

  },
  // Restart FWA-CPE2023
  Restart_button: {
    width: 250,
    textAlign: 'center',
    left: 10,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 140,
    backgroundColor: "#87CEEB",
    fontWeight: 'bold',
    fontSize: 17,
  },


});


