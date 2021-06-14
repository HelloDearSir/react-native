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

 function SettingScreen() {
  return(
    <View> 
      <Text> 
        Hello"
      </Text>
    </View>
  )
}
export default function App() { 

   return (
     <NavigationContainer>
       <Tab.Navigator tabBarOptions={{
        showLabel: false,
         style: {
           backgroundColor:'#fff',
           position:'absolute',
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
            name="home" size={20}
            color={focused ? 'red' : 'gray'}
            >
            </FontAwesome5>
           </View>
          )
       }}>
           </Tab.Screen>

       <Tab.Screen name={"Setting"} component={SettingScreen}></Tab.Screen>
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