import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import Theme from '../Theme/Theme';

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Login')
  }, 4000);
  return (
    <View style={[,Theme.styles.flexColumn, Theme.styles.flex1,Theme.styles.justifyCenter,Theme.styles.alignCenter, Theme.colors.backgroundGray]}>
      <Image source={require('../img/Logo.png')} style={[Theme.styles.w180, Theme.styles.h180]}/>
      <Text style={[Theme.styles.f40, Theme.colors.ColorOrange, Theme.styles.bold]}>LocalPet</Text>
    </View>

  )
}

export default Splash

const styles = StyleSheet.create({})