import React from 'react'
import { Text, Image, ScrollView, View } from 'react-native'
import { Card } from 'react-native-paper'
import Theme from '../Theme/Theme'

const InformationAboutUs = (gotoFindVeterinary) => {
    return (
        <ScrollView style={[Theme.styles.mh20, Theme.styles.mb35]}>
            <View style={[Theme.styles.alignCenter]}>   
                <Image source={require('../img/banner-about.jpeg')} style={[Theme.styles.w400, Theme.styles.h130]} />
            </View>
            <Card style={[Theme.styles.mt20]}>
                <View style={[Theme.styles.mh20, Theme.styles.alignCenter]}>
                    <Text style={[Theme.styles.bold, Theme.styles.f16, Theme.colors.ColorOrange]}>
                        LocalPet
                    </Text>
                    <Text style={[Theme.styles.mb20]}>
                       { `\n Somos una empresa de desarrollo de software cuyo objetivo es ayudar a la comunidad ofreciendo servicios de localización de veterinarias a cualquier hora del día dentro de la zona de Cancún, Quintana Roo.
                        \nLocalpet surgió a través del problema de que la mascota de alguna persona se enferma o sufre un accidente a mitad de la noche. Gracias a esta problematica se planteó la pregunta de, ¿Porqué no hacer un sistema dondé una persona pueda registrarse y localizar su veterinaria más cercana usando geolocalización?`}
                    </Text>
                </View>
            </Card>
            <Card style={[Theme.styles.mt15]}>
                <View style={[Theme.styles.mh20, Theme.styles.alignCenter]}>
                    <Text style={[Theme.styles.mt10, Theme.colors.ColorOrange, Theme.styles.bold, Theme.styles.f16]}>
                        Misión
                    </Text>
                    <Text style={[Theme.styles.mt15, Theme.styles.mb20]}>
                        Nuestra misión es brindar a las clínicas veterinarias y usuarios un medio la cual buscar clínicas cercanas o promocionar sus servicios , de una manera mas eficiente y practica.
                    </Text>
                </View>
            </Card>
            <Card style={[Theme.styles.mt15]}>
                <View style={[Theme.styles.mh20, Theme.styles.alignCenter]}>
                    <Text style={[Theme.styles.mt10, Theme.styles.bold, Theme.colors.ColorOrange, Theme.styles.f16]}>
                        Visión
                    </Text>
                    <Text style={[Theme.styles.mt15, Theme.styles.mb20]}>
                        Nuestra visión es ofrecer a nuestros clientes un sistemas de fácil interacción donde podrán encontrar las veterinarias mas cercanas a su alcance, nuestro sistema permite el registro de nuevas veterinarias con el mismo usuario.
                    </Text>
                </View>
            </Card>
        </ScrollView>
    )
}

export default InformationAboutUs
