import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import SignOutModal from '../Components.js/SignOutModal'

const SignOut = ({ navigation }) => {
    
    return (
        <View style={{ flex: 1, backgroundColor: '#CBD5E1', justifyContent: 'center' }}>
            <SignOutModal/>
        </View>
    )
}

export default SignOut

const styles = StyleSheet.create({})