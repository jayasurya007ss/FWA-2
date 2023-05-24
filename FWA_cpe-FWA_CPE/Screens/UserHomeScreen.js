import React from 'react';
import { TouchableOpacity, Image, View, Modal, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
export function UserViewScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (

    <View style={styles.container}>

      <Text style={styles.text}>HFCL</Text>
      <TouchableOpacity style={styles.UserScreen}
        onPress={() => navigation.navigate('UserScreen')}>

        <Image
          source={require('../assets/user1.png')}
          style={styles.logo}
        />
        <Text style={styles.text1}>User</Text>
      </TouchableOpacity>




      <TouchableOpacity style={styles.UserSettingScreen}
        onPress={() => navigation.navigate('UserSettingScreen')} >

        <Image
          source={require('../assets/settings1.png')}
          style={styles.logo1}
        />
        <Text style={styles.text2}>Settings</Text>

      </TouchableOpacity>


      <View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require('../assets/menu1.png')}
            style={styles.logo3}
          />
        </TouchableOpacity>
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalView}>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalClose}>Close</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.lable}
              onPress={() => { navigation.navigate('GeneralStatusInfo'); setModalVisible(false) }}>
              <Text style={styles.lable}>General Status info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.lable}
              onPress={() => { navigation.navigate('Data Usage'); setModalVisible(false) }}>
              <Text style={styles.lable}>Data Usage</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.lable}
              onPress={() => { navigation.navigate('About US'); setModalVisible(false) }}>
              <Text style={styles.lable}>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.lable}
              onPress={() => { navigation.navigate('Support'); setModalVisible(false) }}>
              <Text style={styles.lable}>Support</Text>
            </TouchableOpacity>

          </View>
        </Modal>
      </View>

      <TouchableOpacity style={styles.UserConnectScreen}
        onPress={() => navigation.navigate('UserConnectScreen')} >
        <Image
          source={require('../assets/connection1.png')}
          style={styles.logo4}
        />
        <Text style={styles.text4}>Connection</Text>
      </TouchableOpacity>

    </View>
  );
};
export default UserViewScreen;


const styles = StyleSheet.create({

  container: {
    backgroundColor: '#333281',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'auto',
    position: 'relative',
    top: 0,
  },


  /* HFCL Text*/
  text: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 40,
    width: '100%',
  },

  /*User*/
  UserScreen: {
    flexDirection: 'row',
    alignItems: 'stretch',
    textAlign: 'auto',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 30,
    width: 40,
    height: 40,
    left: 30,
    marginBottom: 0,
    top: '200%',

  },

  logo: {
    width: 35,
    height: 35,
    marginRight: 0,
    left: 0,
    position: 'absolute',
  },

  text1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    width: 80,
    height: 50,
    fontSize: 12,
    padding: 0,
    left: 15,
  },


  /*setting*/
  UserSettingScreen: {
    textAlign: 'auto',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 20,
    padding: 30,
    marginBottom: 10,
    top: '188%',
    left: '40%',
  },

  logo1: {
    width: 35,
    height: 35,
    marginRight: 10,
    position: 'absolute',
    left: 1,
  },

  text2: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    width: 70,
    height: 50,
    fontSize: 12,
    padding: 0,
    right: 6,
  },
  /*Menu*/

  lable: {
    bottom: 20,
    fontSize: 20,
    padding: 5,
    textAlign: 'auto',
    fontWeight: 'bold',
    color: '#333281',
  },

  modalView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    marginTop: 130,
    height: 230,
  },

  modalClose: {
    bottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333281',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },

  logo3: {
    bottom: 1,
    width: 35,
    height: 35,
    marginLeft: 10,
    position: 'absolute',
  },


  /*Connection*/
  UserConnectScreen: {
    flexDirection: 'row',
    height: 50,
    width: 50,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    top: '173%',
    left: '20%',
  },



  logo4: {
    width: 35,
    height: 35,
    marginLeft: 10,
    position: 'absolute',
  },

  text4: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    height: 50,
    width: 110,
    fontSize: 12,
    padding: 10,
    left: 15,
  },



});





