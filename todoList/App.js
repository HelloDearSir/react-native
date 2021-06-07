import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, FlatList } from 'react-native';


export default function App() {
   const [data,setData] = useState([]);
   
useEffect(() =>{
 fetch("http://192.168.0.101:5000/movies")  
  .then(res=>res.json()).then(results=>{
    setData(results)
  })
},[])

  
const renderList = ((item)=>{
  return(
   
    <View style={styles.cardView}>
      
        <View style={{marginLeft:10}}>
            <Text style={styles.text}>{item.genre}</Text>   
             <Text style={styles.text}>{item.title}</Text>    
             <Text style={styles.text}>{item.year}</Text>  
        </View>
   
    </View>
 
  )
})
  return (
    <View style={styles.container}>
    <View style={styles.taskWrapper}>
       <Text style={styles.sectionTitle}> Today's Tasks</Text>
        <FlatList data={data} 
        renderItem={({item}) => {
          return renderList(item)
        }}
        keyExtractor={item=>item._id}
         />
      
       </View>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "American Typewriter"
  },
  button: {
    backgroundColor: '#E29F2D',
    padding: 10, 
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 80
  },
  buttonText: {
    fontFamily: "American Typewriter"
  },
  image: {
    marginBottom: 10,
    height: "50%",
    width: "60%"
  }

});