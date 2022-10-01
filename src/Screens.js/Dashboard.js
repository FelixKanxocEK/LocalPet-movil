import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Screens
import AboutUs from '../Screens.js/AboutUs';
import FindVeterinary from '../Screens.js/FindVeterinary'
//Componets
import Home from './Home';
import DrawerMenu from '../Components.js/DrawerMenu';
import AddVeterinary from '../Screens.js/AddVterinary'
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
          <Drawer.Screen name='Inicio' component={Home} />
          <Drawer.Screen name='Agregar Veterinaria' component={AddVeterinary} />
          <Drawer.Screen name='Encontrar Veterinaria' component={FindVeterinary} />
          <Drawer.Screen name="About Us" component={AboutUs} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default Dashboard