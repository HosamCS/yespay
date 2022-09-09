import React, { useState } from 'react';
import {View , Text, Dimensions , ImageBackground , TouchableOpacity , StyleSheet, ScrollView, Image} from 'react-native'


const Images= [
  {
    title: 'Beautiful and dramatic ',
    image: 'https://cutt.ly/2Cn42By',
  },
  {
    title: 'Beautiful and dramatic ',
    image: 'https://i.pinimg.com/564x/0e/5e/23/0e5e23b2c09dd700e5e61e3173e1e162.jpg',
  },
  {
    title: 'Beautiful and dramatic ',
    image: 'https://cutt.ly/jCn7cZb',
  },

]



const CardCatagory = (props) => {
  return (
    <View style={{ marginHorizontal:10,marginTop:25,borderRadius:15,}}>
      <ImageBackground source={{uri: props.image}} resizeMode='cover' style={styles.image} imageStyle={{ borderRadius:12}}> 
             <Text style={styles.text}>{props.name}</Text>
      </ImageBackground>
    </View>  
  )
} 

const {height, width} = Dimensions.get('screen');


const  Slider =() => {

   const [imgActive , setImageActive] = useState(0)

  onchange = (nativeEvent) => {
    if (nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive){
        setImageActive (slide)
      }
    }
  }

    return (
      <View style={{ flex: 1,}}>
       <View style={styles.warp}>
       
         <ScrollView 
          horizontal showsHorizontalScrollIndicator={false}
          onScroll ={({nativeEvent})=>onchange(nativeEvent)}
          
          style={styles.warp}
         > 
           {Images.map(items =>(
            <TouchableOpacity 
              onPress={() => console.warn('clicked')}
            >
              <CardCatagory image={items.image} name={items.name} />
            </TouchableOpacity>   
          ))}
         </ScrollView>
         <View style={styles.warpDot}>
            {
              Images.map((e , index) =>
                <Text  key={e} style={imgActive == index ? styles.dotActive : styles.dot }>
                  ●
                </Text>
              )
            }
         </View>

       </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    warp:{
     
    },
    image:{
      width:width -50 ,
      height:150, 
      marginHorizontal:10
    },
     warpDot:{
      bottom: 0 , 
      flexDirection:'row',
      alignSelf:'center',
      
     
     },
     dotActive :{
      margin:3 ,
       color: '#5C4CDB' ,
       fontSize:25,
     },
     dot :{
      margin:3 ,
       color:'#B8B3F0',
       fontSize:20
       
       
     }
  })
  export default Slider;

