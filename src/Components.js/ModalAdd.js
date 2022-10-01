import React from 'react'
import { Text, View, ScrollView, Pressable, Modal } from 'react-native'
import { TextInput } from 'react-native-paper'
import Theme from '../Theme/Theme'

const ModalAdd = ({ showModalAdd, setShowModalAdd }) => {
  return (
    // <View style={[Theme.styles.flex1]}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={showModalAdd}
      onRequestClose={() => {
        setShowModalAdd(false);
      }}
    >
      <View style={[Theme.styles.flex1, Theme.styles.justifyCenter, Theme.styles.mh20, Theme.styles.mt50]}>
        <ScrollView>
          <Text style={[Theme.styles.textCenter, Theme.styles.f17, Theme.styles.bold, Theme.colors.ColorOrange, Theme.styles.pb20]}>
            Agregar Veterinaria
          </Text>
          <TextInput
            label={'Nombre de la veterinaria  '}
            style={[Theme.styles.m10, Theme.colors.Whitebackground]}
          />
          <TextInput
            label={'Ubicacion'}
            style={[Theme.styles.m10, Theme.colors.Whitebackground]}
          />
          <TextInput
            label={'Codigo Postal'}
            style={[Theme.styles.m10, Theme.colors.Whitebackground]}
          />
          <TextInput
            label={'Calle'}
            style={[Theme.styles.m10, Theme.colors.Whitebackground]}
          />
          <TextInput
            label={'Telefono'}
            style={[Theme.styles.m10, Theme.colors.Whitebackground]}
          />
          <TextInput
            label={'Region o colonia'}
            style={[Theme.styles.m10, Theme.colors.Whitebackground]}
          />
          <TextInput
            label={'No. ext'}
            style={[Theme.styles.m10, Theme.colors.Whitebackground]}
          />
          <TextInput
            label={'Correo'}
            style={[Theme.styles.m10, Theme.colors.Whitebackground]}
          />
          <View style={[Theme.styles.flexrow, Theme.styles.justifyCenter]}>
            <Pressable
              onPress={() => setShowModalAdd(false)}
              style={[Theme.colors.backgroundRed,Theme.styles.ph20, Theme.styles.mh30, Theme.styles.pv10, Theme.styles.redondo5, Theme.styles.mt30]}>
              <Text style={[Theme.colors.WhiteColor, Theme.styles.textCenter, Theme.styles.f17, Theme.styles.bold]}>
                Cancelar
              </Text>
            </Pressable>
            <Pressable style={[Theme.colors.backgroundOrange, Theme.styles.mh30, Theme.styles.pv10, Theme.styles.ph20, Theme.styles.mt30, Theme.styles.redondo5]}>
              <Text style={[Theme.styles.textCenter, Theme.styles.f17, Theme.styles.bold, Theme.colors.WhiteColor]}>
                Guardar 
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </Modal>
    // </View>
  )
}

export default ModalAdd
