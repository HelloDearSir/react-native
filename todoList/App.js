import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView,StyleSheet, Text, TextInput, View,TouchableOpacity,FlatList,Alert } from 'react-native';
 
export default function App() {
  const [task, setTask] = useState();
  const [name,setName] = useState();
  const [loading,setLoading] = useState(true);
  const [taskItems, setTaskItems] = useState([]);
  const [data,setData] = useState([]);
   const featchdata = () => {
    fetch("http://192.168.0.101:5000/ToDo")  
    .then(res=>res.json()).then(results=>{
      setData(results)
      setLoading(false)
    }).catch(err=>{
      Alert.alert("something went wrong")
    })
   } 
  useEffect(() =>{
    featchdata();
   },[])

  const handleAddTask = () => {
    fetch("http://192.168.0.101:5000/newTasks",{
              method:"post",
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({
                 name,
              })
          })
  }
  // const completeTask = () => {
  //   let itemsCopy = [...taskItems];
  //   itemsCopy.splice(item, 1);
  //   setTaskItems(itemsCopy)
  // }
   

const renderList = ((item)=>{
  return(
   
    <View style={styles.cardView}>
      
        <View style={{marginLeft:10}}>
        {/* <TouchableOpacity  onPress={() => completeTask()}> */}
            <Text style={styles.text}>{item.name}</Text>   
            {/* </TouchableOpacity> */}
        </View>
       </View>
 )
})
  
  return (
    <View style={styles.container}>
     <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks</Text>
         <View style={styles.items}>
         <FlatList data={data} 
        renderItem={({item}) => {
          return renderList(item)
        }}
        keyExtractor={item=>item._id}
        onRefresh={()=>featchdata()}
        refreshing={loading}  
/>
      
        

        </View>
        </View>
        <KeyboardAvoidingView 
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
    <TextInput style={styles.input} placeholder={'write a task'} value={name} onChangeText={text => setName (text)}/>

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