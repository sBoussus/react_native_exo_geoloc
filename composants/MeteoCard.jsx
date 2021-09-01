import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, Modal, TextInput } from 'react-native'

export const MeteoCard = (props) => {
    return (
        <View style={styles.card}>
            <Text>Latitude : {props.latitude}</Text>
            <Text>Longitude : {props.longitude}</Text>
        </View>        
    )    
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: "#778899"
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