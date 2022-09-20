import React from 'react'
import LoginModal from '../Components.js/LoginModal'
import { StyleSheet } from 'react-native'

const Login = ({ navigation }) => {
    const goToSignOut = () => {
        navigation.navigate('SignOut')
    }
    
    return (
        <LoginModal
            goToSignOut={goToSignOut}
        />
    )
}

export default Login

const styles = StyleSheet.create({})