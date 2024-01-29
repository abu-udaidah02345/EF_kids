import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function KidOrParent({navigation}) {
  const callNext = () => {
    navigation.navigate('SavePlant');
  };
  return (
    <>
    <View style={{width:"100%",height:60,backgroundColor:"#0C9352"}}>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require("../../../assets/images/back.png")}
    
    
    />
            </TouchableOpacity>
    
    <Text style={{color:"white",fontSize:25,marginVertical:12}}>Select Kids</Text>

        </View>
   

    </View>
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        //  alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 36,
          color: '#0C9352',
          textAlign: 'center',
         marginTop:10,
        }}>
     Select Kid
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingHorizontal: 12,
          //  justifyContent: 'space-around',
         marginTop: 20,
        }}>
            <View style={{flexDirection:"column"}}>
            <Image source={require('../../../assets/images/child.png')} 
        style={{width:150,height:150}}
        />
        <Text style={{textAlign:"center"}}>Ram</Text>
            </View>
            <View style={{flexDirection:"column"}}>
        <Image source={require('../../../assets/images/child1.png')} 
          style={{width:150,height:150}}
        />
      <Text style={{textAlign:"center"}}>Ram</Text>
      </View>
      </View>
    
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  verifyButton: {
    marginTop: 20,
    backgroundColor: '#E1E1E1',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 35,
    elevation: 5,
  },
  verifyButtonText: {
    color: '#0D0D0D',
    fontSize: 16,
    fontWeight: '600',
    // marginTop: 20,
  },
});
