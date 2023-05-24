import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

export function UPNP_DLNA_MDNS({ navigation }) {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/user.png")} />
      <Text>UPNP_DLNA_MDNS</Text>

    </View>

  );
}
export default UPNP_DLNA_MDNS;

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


