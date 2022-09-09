import React ,{useState} from 'react';
import {View , Text , StyleSheet, TurboModuleRegistry, Dimensions, ScrollView} from 'react-native'
import { Header } from '../../components/HomeComponent/Header';
import Searchbar from '../../components/Input';
import Slider from '../../components/HomeComponent/Slider';
import Payment from '../../components/HomeComponent/Payment'
import Brands from '../../components/HomeComponent/Brands'





const  Home =({navigation , props}) => {
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
    <ScrollView>
    <View style = {{flex:1 ,}}>
        <Header />
        <View style={{flex:1}}>
        <View style={styles.whiteSheet}>
            
             <Searchbar />
             <Slider />
             <Payment navigation={navigation} />
         
             <Text style={{marginHorizontal:20 ,fontSize:22 , fontWeight:'bold', color:'#000' }}>Cashback</Text>
             <Brands />
            
        </View>
     </View>
        </View> 
        </ScrollView>  
    );
  }

  const styles =StyleSheet.create({

    whiteSheet:{

      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      backgroundColor :'#F5F7FE',
      bottom: 15,
    },
  
  })
  export default Home

