import React from "react";
import { View, Text, ImageBackground, ScrollView , StyleSheet , TouchableOpacity } from "react-native";
import { Brand } from "../../Data";


const CardCatagory = (props) => {
    return (
      <View style={{ marginHorizontal:18,margin:15,borderRadius:15 ,}}>
        <ImageBackground source={{uri: props.image}} resizeMode='cover' style={styles.image} imageStyle={{ borderRadius:12}} /> 
      </View>  
    )
  }
  

export default function Brands() {

  return (
    <View style={styles.viewcard}>
  
    
      <ScrollView 
       horizontal showsHorizontalScrollIndicator={false}
      > 
        {Brand.map(items =>(
         <TouchableOpacity 
           onPress={() => console.warn('clicked')}
         >
           <CardCatagory image={items.image}/>
           <View style={{height :40 , width:60 ,marginHorizontal :20}}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>{items.text}</Text>
           </View>

         </TouchableOpacity>   
       ))}
      </ScrollView>
     

    </View>

  );
}

const styles = StyleSheet.create({
    viewcard :{ flex:1, alignItems:'center' ,alignContent:'center',},
    image:{
        width:60,
        height:60
    },
})
