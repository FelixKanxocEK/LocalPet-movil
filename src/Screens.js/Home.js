import React from 'react'
import { Text } from 'react-native'
import Welcome from '../Components.js/Welcome'  

const Home = ({navigation}) => {
  const goVeterinary = () => {
    navigation.navigate('Encontrar Veterinaria')
}
  return (  
    <Welcome
      goVeterinary = {goVeterinary}
    />  
  )
}

export default Home