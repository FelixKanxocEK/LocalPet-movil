import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput, Card } from 'react-native-paper'

const Registration = () => {

  return (
    <View style={{ paddingHorizontal: 10 }}>
                <Card style={{ backgroundColor: '#F5F5F5' }}>
                    <View style={{ alignItems: 'center', margin: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F58216' }}>Registro</Text>
                        <Image source={require("../img/Logo.png")} style={{ width: 130, height: 130, marginTop: 30 }} />
                    </View>
                    <TextInput
                        style={{ margin: 10, backgroundColor: '#F5F5F5' }}
                        label={'Nombre'}
                        activeUnderlineColor='#F58216'
                    />
                    <TextInput
                        label={'Apellidos'}
                        activeUnderlineColor='#F58216'
                        style={{ margin: 10, backgroundColor: '#F5F5F5' }}
                    />
                    <TextInput
                        label={'Email'}
                        activeUnderlineColor='#F58216'
                        style={{ margin: 10, backgroundColor: '#F5F5F5' }}
                    />
                    <TextInput
                        label={'Contraseña'}
                        activeUnderlineColor='#F58216'
                        style={{ margin: 10, backgroundColor: '#F5F5F5' }}
                    />
                    <TextInput
                        label={'Confirmar Contraseña'}
                        activeUnderlineColor='#F58216'
                        style={{ margin: 10, marginBottom: 40, backgroundColor: '#F5F5F5' }}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                        <TouchableOpacity 
                            style={{ backgroundColor: '#F58216', padding: 20, borderRadius: 10 }}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18 }}>Resgistrarse</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
  )
}

export default Registration