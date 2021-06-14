import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView,StyleSheet, Text, TextInput, View,TouchableOpacity,Button } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Test from './test';
import {FontAwesome5} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

 function HomeScreen() {
   return(
     <Test/>
   )
 }

 function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
export default function App() { 

   return (
     <NavigationContainer>
       <Tab.Navigator tabBarOptions={{
        showLabel: false,
         style: {
           backgroundColor:'#fff',
           position: 'relative' 
           ,
           bottom:40,
           marginHorizontal: 20,
          height:60,
          borderRadius:10,
          shadowColor:'#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
       

         }
       }}>
       <Tab.Screen name={"Home"} component={HomeScreen} options={{
         tabBarIcon:({focused}) => (
           <View style={{
             position:'absolute',
             top:'20%',
           }}>
            <FontAwesome5
            name="book" size={20}
            color={focused ? 'black' : 'gray'}
            >
            </FontAwesome5>
           </View>
          )
       }}>
           </Tab.Screen>

       <Tab.Screen name={"Setting"} component={SettingsScreen} options={{
         tabBarIcon:({focused}) => (
           <View style= {{
             position:'absolute',
             top:'20%'
           }}>
             <FontAwesome5 name="font" size={20}
             color={focused ? 'black' : 'gray'}>

             </FontAwesome5>
           </View>
         )
       }} ></Tab.Screen>
       </Tab.Navigator>
      
     </NavigationContainer>
   );
}


 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,

  },
  items: {
    marginTop: 30
  } ,
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    padding: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
   },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText:{},

});