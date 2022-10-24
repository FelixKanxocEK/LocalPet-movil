import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import SignOutModal from '../Components.js/SignOutModal'
import Theme from '../Theme/Theme'

const SignOut = ({ navigation }) => {
    const goToLogin = () => {
        navigation.navigate('Login')
    }
    
    return (
        <View style={[{ flex: 1, justifyContent: 'center' }, Theme.colors.backgroundGray]}>
            <SignOutModal 
                goToLogin={goToLogin}
            />
        </View>
    )
}

export default SignOut

const styles = StyleSheet.create({})