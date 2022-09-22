import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import { Card, TextInput } from 'react-native-paper'
import Theme from '../Theme/Theme'

const LoginModal = ({ goToSignOut }) => {
    return (
        <View style={[Theme.styles.justifyCenter, Theme.styles.flex1, Theme.colors.backgroundGray]}>
            <View style={[Theme.styles.mh25]}>
                <Card>
                    <View style={[Theme.styles.mt20, Theme.styles.alignCenter]}>
                        <Text style={[Theme.colors.ColorOrange, Theme.styles.f20, Theme.styles.bold]}>Iniciar Sesión</Text>
                        <Image source={require("../img/Logo.png")} style={[Theme.styles.w100, Theme.styles.h100]} />
                    </View>
                    <TextInput
                        outlineColor='#F58216'
                        style={[Theme.styles.mh25, Theme.styles.mt15, Theme.colors.backgroundGrayW]}
                        activeUnderlineColor='#F58216'
                        label={'Email'}
                    />
                    <TextInput
                        style={[Theme.colors.backgroundGrayW, Theme.styles.mt15, Theme.styles.mh25]}
                        activeUnderlineColor='#F58216'
                        label={'Password'}
                    />
                    <View style={[Theme.styles.mt25, Theme.styles.alignEnd, Theme.styles.mh30]}>
                        <Pressable>
                            <Text style={[Theme.colors.ColorOrange, Theme.styles.f15]}>Olvidé mi Contraseña</Text>
                        </Pressable>
                    </View>
                    <View style={[Theme.styles.alignCenter, Theme.styles.m15]}>
                        <Pressable style={[Theme.colors.backgroundOrange, Theme.styles.redondo5, Theme.styles.p15]}>
                            <Text style={[Theme.colors.WhiteColor, Theme.styles.f17, Theme.styles.bold]}>Iniciar Sesión</Text>
                        </Pressable>
                    </View>
                    <View style={[Theme.styles.mb20, Theme.styles.alignCenter]}>
                        <Text>¿No tiene una cuenta?</Text>
                        <Pressable
                            onPress={() => goToSignOut()}
                        >
                            <Text style={[Theme.styles.f16, Theme.styles.bold, Theme.colors.ColorOrange]}>Registrate.</Text>
                        </Pressable>
                    </View>
                </Card>
            </View>
        </View>
    )
}

export default LoginModal
