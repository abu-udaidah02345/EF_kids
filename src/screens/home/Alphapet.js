import React from "react";
import { View,Text, StyleSheet,Image, TouchableOpacity } from "react-native";

function Alphapet({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={require("../../../assets/images/button.png")}
              />
            </TouchableOpacity>
<Text style={{color:"#1D192B",fontWeight:"700",fontSize:33,marginLeft:4}}>English Practice</Text>
            </View>

            <Image source={require("../../../assets/images/group1.png")}
            
            />
             <Image source={require("../../../assets/images/group2.png")}
            
            />

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",paddingHorizontal:20
    }
})

export default Alphapet;