import React, { Fragment, useState } from 'react'
import { StyleSheet, Pressable, View, Text } from 'react-native'
import { Geolocalisation, MeteoCard } from './composants/MeteoCard';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  findCoordinates = () => { 
    Geolocation.getCurrentPosition( 
      position => { 
        const latitude = JSON.stringify(position.coords.latitude)
        setLatitude(latitude) 
        const longitude = JSON.stringify(position.coords.longitude)
        setLongitude(longitude) 
      }, 
      error => Alert.alert(error.message), { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 } 
    ); 
  };
  return (
    <View style={styles.container}> 
      <View style={styles.container}>
        <View>
          <Pressable style={styles.btnBox} onPress={findCoordinates}>
              <Text style={styles.btnText}>Geolocalisation</Text>
          </Pressable>          
        </View>   
        <MeteoCard latitude={latitude} longitude={longitude}></MeteoCard>
			</View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192841',
    alignItems: 'center'
  },
  btnBox: {            
    margin: 5,
    padding: 5,
    backgroundColor: "#318CE7",
    borderRadius: 5,
  },
  btnText: {
      color: "#FFFFFF"
  },
});
