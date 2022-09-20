
import React from 'react'
import { Text, View, Image  } from 'react-native'
import { Card } from 'react-native-paper'


// const Drawer = createDrawerNavigator();  

const Dashboard = () => {
  return (

    <View style={{ justifyContent: 'center',flex: 1, backgroundColor: '#cbd5e1' }}>
      <View style={{justifyContent: 'center', alignContent: 'center'}}>
        <Card style={{marginHorizontal: 10, padding: 40, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>Hola</Text>
          <Image source={require('../img/Logo.png')} style={{width: 100, height: 100}}/>
          <Text>ODKOAPKP KPOAK POKDPOKAPOK POK OAKPDOKASCJSI A IDIASKP</Text>
        </Card>
      </View>
    </View>
  )
}

export default Dashboard