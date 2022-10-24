import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import { TextInput, Card } from 'react-native-paper'
import Theme from '../Theme/Theme'

const Registration = ({goToLogin}) => {
    

    return (
        <View style={[Theme.styles.backgroundWhite]} >
            <Card style={[Theme.styles.mh15]}>
                <View style={{ alignItems: 'center', margin: 15, }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F58216' }}>Registro</Text>
                    <Image source={require("../img/Logo.png")} style={{ width: 130, height: 130, marginTop: 30 }} />
                </View>
                <TextInput
                    style={[{ marginHorizontal: 20, marginTop: 10 }, Theme.colors.backgroundGrayW]}
                    label={'Nombre'}
                    activeUnderlineColor='#F58216'
                />
                <TextInput
                    label={'Apellidos'}
                    activeUnderlineColor='#F58216'
                    style={[{ marginHorizontal: 20, marginTop: 15 }, Theme.colors.backgroundGrayW]}
                />
                <TextInput
                    label={'Email'}
                    activeUnderlineColor='#F58216'
                    style={[{ marginHorizontal: 20, marginTop: 15 }, Theme.colors.backgroundGrayW]}
                />
                <TextInput
                    label={'Contraseña'}
                    activeUnderlineColor='#F58216'
                    style={[{ marginHorizontal: 20, marginTop: 15 }, Theme.colors.backgroundGrayW]}
                />
                <TextInput
                    label={'Confirmar Contraseña'}
                    activeUnderlineColor='#F58216'
                    style={[{ marginHorizontal: 20, marginTop: 15, marginBottom: 40 }, Theme.colors.backgroundGrayW]}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity
                        style={[Theme.styles.padding15, { backgroundColor: '#F58216', borderRadius: 10 }]}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Resgistrarse</Text>
                    </TouchableOpacity>
                </View>
                <View style={[Theme.styles.mb20, Theme.styles.alignCenter]}>
                    <Text> ¿Ya tienes cuenta?</Text>
                    <Pressable onPress={() => goToLogin()}>
                        <Text style={[Theme.styles.bold, Theme.colors.ColorOrange, Theme.styles.f16]}>
                            Inicia sesión
                        </Text>
                    </Pressable>
                </View>
            </Card>
        </View>
    )
}

export default Registration