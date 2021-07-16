import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView,StyleSheet, Text, TextInput, View,TouchableOpacity,Button } from 'react-native';
import Task from './components/Task';
import * as Notifcation from 'expo-notifications';

Notifcation.setNotificationHandler({
  handleNotifcation: async () => {
    return {
      ShouldPlaySound: true, 
      shouldShowAlert: true, 
    }
  }
})

const todolist = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const handleNotifcation = () => {
    Notifcation.scheduleNotificationAsync({
      content: {
        title: "testing into notifications",
        body: "this is my local shit"
        },
        trigger:{
          seconds: 1,
        }
      })
  };

  return (
    <View style={styles.container}>
      <Button title={"open Notifcation"}onPress={handleNotifcation} /> 
     <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks</Text>
         <View style={styles.items}>
           {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                    <Task text={item} /> 
                  </TouchableOpacity>
                )
              })
           } 

        </View>
        </View>
        <KeyboardAvoidingView 
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
    <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask (text)}/>

    <TouchableOpacity onPress={()=> handleAddTask()}>
     <View style={styles.addWrapper}>
      <Text style={styles.addText}>+ </Text>
      </View>
     </TouchableOpacity>
  </KeyboardAvoidingView>
    </View>



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
    top: 60,
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

export default todolist;
