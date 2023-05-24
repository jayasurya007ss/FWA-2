import React from 'react';
import { TouchableOpacity, Image, View,Modal, Text, StyleSheet } from 'react-native';

import { useState } from 'react';


export  function UserViewScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (

    <View style={styles.container}>
    <Text style ={styles.text}>HFCL</Text>
    <TouchableOpacity style={styles.handleButtonPress1}
        onPress={() => navigation.navigate('UserScreen')} >
         
        <Image
          source={require('../assets/user.png')}
          style={styles.logo}
        /> 
         <Text style={styles.text1}>User</Text>
      </TouchableOpacity> 
      
      <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        source={require('../assets/menu.png')}
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
        onPress={() => navigation.navigate('UserScreen')}>
            <Text style={styles.lable}>General Status info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lable}
        onPress={() => navigation.navigate('Data Usage')}>
            <Text style={styles.lable}>Data Usage</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lable}
        onPress={() => navigation.navigate('CPE-Details')} >
            <Text style={styles.lable}>CPE-Details</Text>
        </TouchableOpacity>
          
          <TouchableOpacity style={styles.lable}
        onPress={() => navigation.navigate('About US')}>
            <Text style={styles.lable}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lable}
        onPress={() => navigation.navigate('Support')}>
            <Text style={styles.lable}>Support</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>

    
    <TouchableOpacity style={styles.handleButtonPress2}
        onPress={() => navigation.navigate('UserSettingScreen')} >
      
        <Image
        source={require('../assets/setting.png')}
        style={styles.logo1}
        />
       <Text style={styles.text2}>Settings</Text>
      
    </TouchableOpacity> 


    <TouchableOpacity style={styles.handleButtonPress4}
        onPress={() => navigation.navigate('UserConnectScreen')} >
        <Image
        source={require('../assets/connect.png')}
        style={styles.logo4}
        />
       <Text style={styles.text4}>Connect</Text>
      
      </TouchableOpacity>
  </View>
);
};


                          
const styles = StyleSheet.create({

 container:{
//  backgroundColor:'#333281',
},
lable:{
  bottom:30,
  fontSize:20,
  padding:5,
  textAlign:'auto',
  color:'#FFFFFF',
},
  modalView: {
  backgroundColor: '#333281',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    marginTop: 120,
    height:300,
  },
  modalClose: {
    bottom:20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginBottom: 20,    
  },
  logo3: {
    flex:1,
    width: 50,
    height: 50,
    marginLeft:10,
    position:'absolute',
    top:0,
  },

                           /* HFCL Text*/
text: {
  color:'#333281',
  fontSize: 40,
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'absolute',
  top: 70,
  width: '100%',
 },

                             /*user*/
  handleButtonPress1: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'stretch',
  
    justifyContent: 'center',
    borderRadius: 10,
    padding: 40,
    width:50,
    height:50,
    right:0,
    marginBottom:0,
    top:730,
    
  },
                       
  logo: {
    width: 50,
    height: 50,
    marginRight: 0,
   position: 'absolute',
  },
  
  text1: {
    color: '#333281',
    fontWeight: 'bold',
    width:65,
    height:50,
    fontSize: 16,
    padding: 10,
  },
  

                          /*setting*/
  handleButtonPress2: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    width:50,
    height:50,
    borderRadius: 20,
    padding: 40,
    marginBottom:10,
   top:648,
    left:300,
  },
  logo1: {
    width: 50,
    height: 50,
    marginRight: 10,
   position: 'absolute',
  },

  text2: {
    color: '#333281',
    fontWeight: 'bold',
    width:100,
    height:50,
    fontSize: 16,
        padding: 10,
  },
                                /*Menu*/
  
  handleButtonPress3: {
  flexDirection: 'row',
  alignItems: 'stretch',
  // justifyContent: 'center',
  borderRadius: 10,
  padding: 30,
  bottom:100,
  marginTop:0,
  left:0,
  
  },
                                                     
  
                            

                            /*Connect*/
  handleButtonPress4: {
  flexDirection: 'row',
  
  height:50,
  width:50,
  alignItems: 'stretch',
  justifyContent: 'center',
  borderRadius: 10,
  padding: 40,
  top:500,
  left:150,
},



  logo4: {
  width: 50,
  height: 50,
  marginLeft:10,
  position:'absolute',
},

text4: {
  color: '#333281',
  fontWeight: 'bold',
  height:50,
  width:100,
  fontSize: 16,
 padding: 10,
},

});
export default UserViewScreen;



// import React from 'react';
// import {View,
//   Text, 
//   StyleSheet, 
//   Button,
//   Image,
//   TouchableOpacity} from 'react-native';

// export  function UserHomeScreen({navigation}) { 
  
// return ( 
// <View style={styles.container}> 
// <Image style={styles.image} source={require("../assets/user.png")} />
//   <Text>UserHomeScreen</Text> 

//   </View> 
     
//   );
//   }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign:'center',
//     top:10,
//   },
//   imagehome: {
//     position:'relative',
//     left:20,
//     bottom:20,

//   }
// });

// export default UserHomeScreen;

