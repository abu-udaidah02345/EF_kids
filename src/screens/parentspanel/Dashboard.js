import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Dashboard({navigation}) {
  const addTask = () => {
    navigation.navigate('add');
  };
  return (
    <View style={styles.container}>
         <View style={styles.eclipse}>
    <Text style={{color:"white",fontWeight:"bold",fontSize:26}}>Evenflow Kids</Text>

  </View>

  <View style={{paddingHorizontal:55,flexDirection:"row",justifyContent:"space-between",marginVertical:20}}>

  <View style={{flexDirection:"column"}}>
  <Image source={require("../../../assets/images/solid.png")}/>
    <Text style={{color:"#FFBA0A",fontSize:18,textAlign:"center"}}>Assign Task</Text>

  </View>
  <View style={{flexDirection:"column"}}>
    <TouchableOpacity onPress={()=>navigation.navigate("Selectkid")}>
    <Image source={require("../../../assets/images/solid.png")}/>
    <Text style={{color:"#FFBA0A",fontSize:18,textAlign:"center"}}>Assign Task</Text>

    </TouchableOpacity>
  

  </View>
  <View style={{flexDirection:"column"}}>
    <Image source={require("../../../assets/images/time.png")}/>
    <Text style={{color:"#FFBA0A",fontSize:18,textAlign:"center"}}>Assign Task</Text>
    </View>
    <View style={{flexDirection:"column"}}>
    <Image source={require("../../../assets/images/task.png")}/>
    <Text style={{color:"#FFBA0A",fontSize:18,textAlign:"center"}}>Assign Task</Text>
    </View>

    <View style={{flexDirection:"column"}}>
   <TouchableOpacity onPress={()=>addTask()}>
   <Image source={require("../../../assets/images/add.png")}/>
    <Text style={{color:"#FFBA0A",fontSize:18,textAlign:"center"}}>Assign Task</Text>
   </TouchableOpacity>

    </View>



  </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

      },
      eclipse: {
        width: '100%', // Adjust as needed
        height: '30%', // 35% of the container's height
        backgroundColor: '#0C9352', // Color of the eclipse, change as needed
        borderBottomLeftRadius: 100, // Set a large value for a circle
        borderBottomRightRadius: 100, // Set a large value for a circle
        overflow: 'hidden',
        alignItems:"center",
        justifyContent:"center"
      },
    
});
