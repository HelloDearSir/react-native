import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { KeyboardAvoidingView,StyleSheet, Text, TextInput, View,TouchableOpacity,Button } from 'react-native';

const servertest = () => {
 
     return (
         <View>
             <Text style={styles.title} >texti is here </Text>
             <Button title="connect"></Button>
         </View>
     )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin:10,
    }
})
export default servertest;