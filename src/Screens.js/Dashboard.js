import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Screens
import AboutUs from '../Screens.js/AboutUs';
import FindVeterinary from '../Screens.js/FIndVeterinary'
//Componets
import Welcome from '../Components.js/Welcome';
import DrawerMenu from '../Components.js/DrawerMenu';
import Theme from '../Theme/Theme';


const Drawer = createDrawerNavigator()

const Dashboard = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={props => <DrawerMenu {...props} />}
        screenOptions={{
         drawerActiveBackgroundColor: backgroundColor = '#F58216',
         drawerActiveTintColor: backgroundColor = '#FFF',
         drawerInactiveTintColor: backgroundColor = '#000',
         headerTintColor: backgroundColor = '#F58216'
        }}
        initialRouteName='About-us'>
        <Drawer.Screen name='Inicio' component={Welcome} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name='Encontrar Veterinaria' component={FindVeterinary} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Dashboard