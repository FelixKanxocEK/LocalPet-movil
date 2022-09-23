import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Theme from '../Theme/Theme'
import { Avatar } from 'react-native-paper'

const DrawerMenu = (props) => {
    return (
        <View style={[Theme.styles.flex1]}>
            <View style={[Theme.colors.backgroundOrange, Theme.styles.pt50, Theme.styles.pb20, Theme.styles.alignCenter  ]}>
                <Avatar.Image source={require('../img/Logo.png')} size={150} style={[Theme.colors.backgroundGray]}/>
            </View>
            <DrawerContentScrollView {...props} >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={[Theme.styles.alignCenter,Theme.colors.backgroundRed, {padding: 20}]}>
                <Pressable>
                    <Text style={[Theme.colors.WhiteColor, Theme.styles.bold, Theme.styles.f15]}>
                        Cerrar Sesión
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default DrawerMenu