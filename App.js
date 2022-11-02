import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/Screens.js/Splash';
import Login from './src/Screens.js/Login';
import SignOut from './src/Screens.js/SignOut'
import AuthProvider from './src/context/AuthProvider';
import { View } from 'react-native';
import Dashboard from './src/Screens.js/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignOut' component={SignOut} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
    // <View style={{flex: 1}}>
    //   <Dashboard/>
    // </View>

  )
}

export default App
