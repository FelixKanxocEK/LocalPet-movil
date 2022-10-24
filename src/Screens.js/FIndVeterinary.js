import React, {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'

const tokenMapBox = 'pk.eyJ1IjoiZmVsaXhrYW54b2MiLCJhIjoiY2w4eXAyNnB6MGlneDNubWZnemdoamFrbyJ9.Gk1KEnHBHMNpEbIpbrw8gw'

const FIndVeterinary =()=> {
  const [coordinates] = useState([12.2343, 10.5937]);

   return (
    <View style={styles.page}>
       <View style={styles.container}>
         <MapboxGL.MapView style={styles.map}>
           <MapboxGL.Camera
             zoomLevel={2}
             centerCoordinate={coordinates}
           />
           <MapboxGL.PointAnnotation coordinate={coordinates} />
         </MapboxGL.MapView>
       </View>
     </View>
   );
}

export default FIndVeterinary

const styles = StyleSheet.create({
 page: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "#F5FCFF"
 },
 container: {
 height: '100%',
   width: '100%',
   backgroundColor: 'blue',
 },
 map: {
   flex: 1
 }
});
