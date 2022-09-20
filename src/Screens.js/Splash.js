import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Login')
  }, 4000);
  return (
    <View style={{
      flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#cbd5e1'
    }}>
      <Image source={require('../img/Logo.png')} style={{width: 180, height: 180}}/>
      <Text style={{fontSize: 40, }}>LocalPet</Text>
    </View>

  )
}

export default Splash

const styles = StyleSheet.create({})