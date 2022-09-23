import React from 'react'
import { Text, Pressable, View, Image, ScrollView } from 'react-native'
import { Button, Card } from 'react-native-paper'
import Theme from '../Theme/Theme'

const Welcome = () => {
    return (
        <View style={[Theme.styles.flex1, Theme.styles.backgroundGrayW]}>
            <ScrollView>
                <View style={[Theme.styles.alignCenter, Theme.styles.mt30]}>

                    <Text style={[Theme.styles.f20, Theme.colors.ColorOrange, Theme.styles.bold]}>
                        Encuentra una veterinaria cerca de tí.
                    </Text>
                    <Text style={[Theme.styles.mt5]}>
                        Encontrar una veterinaria, nunca había sido tan fácil.
                    </Text>
                    <Image source={require('../img/banner.png')} style={[Theme.styles.w300, Theme.styles.h200]} />
                    <Button style={[Theme.colors.backgroundOrange]}>
                        <Text style={[Theme.colors.WhiteColor, Theme.styles.bold, Theme.styles.f16]}>
                            Buscar ahora
                        </Text>
                    </Button>
                </View>
                <Card style={[Theme.styles.mt20, Theme.styles.mh20]}>
                    <View style={[Theme.styles.mh20, Theme.styles.alignCenter]}>
                        <Text style={[Theme.styles.mh10, Theme.styles.mt15, Theme.colors.ColorOrange, Theme.styles.bold, Theme.styles.f16]}>
                            ¿Necesitas un veterinario para tu casa?
                        </Text>
                        <Text>
                            {`\nOlvidate de las largas busquedas, nuestro sistema te permitira encontrar las veterinarias más cercanas a tu ubicación de manera gratuita, y no solo eso, si no que también podrás saber:`}
                        </Text>
                        <Text>
                            {`\n1. Sus horarios de atención.
                            \n2. Sus precios.
                            \n3.Los servicios que ofrecen.
                            `}
                        </Text>
                        <View style={[Theme.styles.alignCenter, Theme.styles.mb20]}>
                            <Image source={require('../img/gato.png')} style={[Theme.styles.w250, Theme.styles.h180]} />
                        </View>
                    </View>
                </Card>
                <Card style={[Theme.styles.mt20, Theme.styles.mh20, Theme.styles.flexrow]}>
                    <View style={[Theme.styles.alignCenter]}>
                        <Text style={[Theme.styles.mh20, Theme.styles.mt15, Theme.colors.ColorOrange, Theme.styles.bold]}>
                            ¿Tienes una Veterinaria?
                        </Text>
                        <Text style={[Theme.styles.mh20, Theme.styles.mt15]}>
                            Si necesitas potenciar tu clínica veterinaria, somos la mejor opción, pon tu clínica al alcance de todos
                            con nuestro sistema y agrega la información necesaria para que los clientes te encuentren de manera sencilla.
                        </Text>
                        <View style={[Theme.styles.mt20 ]}>
                            <Image source={require('../img/veterinario.png')} style={[Theme.styles.w250, Theme.styles.h180]} />
                        </View>
                        <Pressable style={[Theme.styles.Edge, Theme.colors.OrangeEdge, Theme.styles.redondo5, Theme.styles.mb20, Theme.styles.mt10]}>
                            <Text style={[Theme.colors.ColorOrange, Theme.styles.bold, Theme.styles.m10]}>
                                Más sobre LocalPet
                            </Text>
                        </Pressable>
                    </View>
                </Card>
                <View style={[Theme.styles.m20, Theme.styles.alignCenter, Theme.styles.mt30, Theme.styles.mb30]}>
                    <Text style={[Theme.colors.ColorOrange, Theme.styles.f18, Theme.styles.bold ]}>
                        Beneficios de LocalPet
                    </Text> 
                        <Image source={require('../img/alcance.png')} style={[Theme.styles.w180, Theme.styles.h180, Theme.styles.mt15]}/>
                    <Text style={[Theme.styles.mt10, Theme.styles.bold, Theme.styles.f15]}>
                        Mayor alcance
                    </Text>
                    <Image source={require('../img/icono-clientes.png')} style={[Theme.styles.w180, Theme.styles.h180, Theme.styles.mt15]}/>
                    <Text style={[Theme.styles.bold, Theme.styles.f15, Theme.styles.mt10]}>
                        Más clientes
                    </Text>
                    <Image source={require('../img/servicio.png')} style={[Theme.styles.w180, Theme.styles.h180, Theme.styles.mt15]}/>
                    <Text style={[Theme.styles.bold, Theme.styles.mt10, Theme.styles.f15]}>
                        Información Completa
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Welcome