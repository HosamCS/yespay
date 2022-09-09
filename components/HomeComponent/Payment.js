import React from "react";
import { View, Text, ImageBackground, ScrollView , StyleSheet , TouchableOpacity } from "react-native";
import { payment } from "../../Data";


const CardCatagory = (props) => {
    return (
      <View style={{ marginHorizontal:18,margin:15,borderRadius:15 ,}}>
        <ImageBackground source={{uri: props.image}} resizeMode='cover' style={styles.image} imageStyle={{ borderRadius:12}} /> 
      </View>  
    )
  }

  
  

export default function Payment({navigation , props}) {

  return (
    <View style={styles.viewcard}>
  
      <ScrollView 
        showsHorizontalScrollIndicator={false}
       contentContainerStyle={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      > 
        {payment.map(items =>(
         <TouchableOpacity 
           onPress={() => navigation.navigate('ShopOnline') }
         >
           <CardCatagory image={items.image}/>
           <View style={{height :40 , width:55 ,marginHorizontal :20}}>
            <Text style={{ fontSize: 16, fontWeight: "900" }}>{items.text}</Text>
           </View>

         </TouchableOpacity>   
       ))}
      </ScrollView>
      </View>


  );
}

const styles = StyleSheet.create({
    viewcard :{ flex:1, },
    image:{
        width:60,
        height:60
    },
})
