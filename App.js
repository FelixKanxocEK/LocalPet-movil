import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { View, Text } from 'react-native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/Screens.js/Splash';
import Login from './src/Screens.js/Login';
import SignOut from './src/Screens.js/SignOut'
// import Registration from './src/Components.js/auth/Registration';


// import Home from './Home';

// import Dashboard from './src/Screens.js/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignOut' component={SignOut} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Hoola</Text>
    //   <NavigationContainer> 
    //     <Home/>
    //   </NavigationContainer> 
    // </View>
  )
}

export default App
