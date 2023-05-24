<<<<<<< HEAD
import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

export function AdminNetworkScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/user.png")} />
      <Text>NetworkScreen</Text>

    </View>

  );
}

export default AdminNetworkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    top: 10,
  },
  imagehome: {
    position: 'relative',
    left: 20,
    bottom: 20,

  }
});



=======
import React from 'react';
import {View,
  Text, 
  StyleSheet, 
  Button,
  Image,
  TouchableOpacity} from 'react-native';

export  function AdminNetworkScreen({navigation}) { 
  
return ( 
<View style={styles.container}> 
<Image style={styles.image} source={require("../assets/user.png")} />
  <Text>NetworkScreen</Text> 

  </View> 
     
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    top:10,
  },
  imagehome: {
    position:'relative',
    left:20,
    bottom:20,

  }
});

export default AdminNetworkScreen;

>>>>>>> 48ee2789035b3187cf21e818b069ea362a47d3f4
