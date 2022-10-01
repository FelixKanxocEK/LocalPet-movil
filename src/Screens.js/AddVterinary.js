import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import VistaAdd from '../Components.js/VistaAdd'
import ModalAdd from '../Components.js/ModalAdd'
import Theme from '../Theme/Theme'


const AddVeterinary = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  return (
    <View style={[Theme.styles.flex1]}>
      <Text style={[Theme.styles.textCenter, Theme.colors.ColorOrange, Theme.styles.bold, Theme.styles.m20, Theme.styles.f18]}>Mis Veterinarias</Text>
      <Pressable onPress={() => setShowModalAdd(true)}
        style={[{ position: 'absolute', bottom: 0, right: 0 }, Theme.colors.backgroundOrange, Theme.styles.pv30, Theme.styles.mh30, Theme.styles.mv30, Theme.styles.redondo50, Theme.styles.ph10]}>
        <Text>    
          Agregar
        </Text>
      </Pressable>
      <View style={[Theme.styles.justifyCenter]}>
        <VistaAdd />
      </View>
      <ModalAdd
        showModalAdd={showModalAdd}
        setShowModalAdd={setShowModalAdd}
      />
    </View>
  )
}

export default AddVeterinary
