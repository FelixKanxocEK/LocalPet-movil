import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Screens
import AboutUs from '../Screens.js/AboutUs';
import FindVeterinary from '../Screens.js/FIndVeterinary'
//Componets
import Welcome from '../Components.js/Welcome';


const Drawer = createDrawerNavigator()

const Dashboard = () => {
  return (
    <NavigationContainer independent={true}>
    <Drawer.Navigator initialRouteName='About-us'>
      <Drawer.Screen name='Inicio' component={Welcome}/>
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name='Encontrar Veterinaria' component={FindVeterinary}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

export default Dashboard