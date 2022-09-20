import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import { Card, TextInput } from 'react-native-paper'

const LoginModal = ({  goToSignOut }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '', justifyContent: 'center' }}>
            <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                <Card style={{ marginTop: 10, backgroundColor: '#F5F5F5' }}>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: '#F58216', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Iniciar Sesión</Text>
                        <Image source={require("../img/Logo.png")} style={{ height: 100, width: 100 }} />
                    </View>
                    <TextInput
                        style={{ margin: 20, backgroundColor: '#F5F5F5' }}
                        activeUnderlineColor='#F58216'
                        label={'Email'}
                    />
                    <TextInput
                        style={{ margin: 20, backgroundColor: '#F5F5F5' }}
                        activeUnderlineColor='#F58216'
                        label={'Password'}
                    />
                    <View style={{ alignItems: 'flex-end', marginHorizontal: 40, marginTop: 10 }}>
                        <Pressable>
                            <Text style={{ color: '#F58216', fontWeight: 'bold' }}>Olvidé mi Contraseña</Text>
                        </Pressable>
                    </View>
                    <View style={{ alignItems: 'center', paddingTop: 20 }}>
                        <Pressable style={{ backgroundColor: '#F58216', padding: 20, borderRadius: 10 }}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 }}>Iniciar Sesión</Text>
                        </Pressable>
                    </View>
                    <View style={{ alignItems: 'center', margin: 20 }}>
                        <Text>¿No tiene una cuenta?.</Text>
                        <Pressable
                            onPress={() => goToSignOut()}
                            style={{ justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ color: '#F58216', fontWeight: 'bold' }}>Registrese.</Text>
                        </Pressable>
                    </View>
                </Card>
            </View>
        </View>
    )
}

export default LoginModal
