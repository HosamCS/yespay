import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import React , {useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { ArrCategories , Brand } from '../../Data';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tabs =(props)=>{
  return(

  <View style={styles.viewcard}>
     
        
          <TouchableOpacity 
          style={[styles.tabs,{backgroundColor:props.activeTab===props.name?'#0255CC':'#F2F4F5',}]}

            onPress={()=>props.setactiveTab(props.name)}
        >
          <Text
            style={{
                color:props.activeTab===props.name?'#fff':'#000',
                fontSize:18,
                fontWeight:'400'
            }}>
               {props.name}</Text>
               
        </TouchableOpacity>
  
  
 
    </View>
)}
const BrandCard = props => {

  return (
    <>
    <View
      style={styles.viewCardIamge}>
      <Image
        source={{uri: props.image,}}
        style={{width: '100%', height: 160,  justifyContent:'center',alignItems:'center',borderRadius:25,}}
        resizeMode='contain'
      />
      <Image
       source={{uri : props.logo}}
       style={{width:40 , height:40 , top:10 , left:10 , position:'absolute' ,borderColor:'#DDD', borderRadius:20 , borderWidth:1} }
      />

    </View>
 
   </>
  );
};



const ShopOnline = ({navigation} ) => {

  const [activeTab , setactiveTab]=useState('Popular');
  const [liked, setLiked] = useState(false);


  

  return (

    <View style ={{ flex:1 ,backgroundColor:'#fff'}}>
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle ={{ height:80}}
     >
      <Tabs name='Popular' activeTab={activeTab} setactiveTab={setactiveTab}  />
      <Tabs name='Fashion' activeTab={activeTab} setactiveTab={setactiveTab}  />
      <Tabs name='Travel' activeTab={activeTab} setactiveTab={setactiveTab}  />
      <Tabs name='Electroinc' activeTab={activeTab} setactiveTab={setactiveTab}  />
    </ScrollView>
   
    <ScrollView
          contentContainerStyle={{
            flexWrap: 'wrap',
            flexDirection: 'row',
           justifyContent:'center',
            // backgroundColor:'blue',
          }}>
  
          
           {Brand.length > 0 && Brand.map(model => (
            <View style={{flexDirection:'column'}}>
             <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
               navigation.navigate('ModelDetails', {
                 image:model.image,
                 logo:model.logo,
                 offer:model.offer,
                 text:model.text
       
               })
             }>
             <BrandCard name={model.text} image={model.image} logo={model.logo} />
             
             
           </TouchableOpacity>

               <View style={{alignItems: 'center',justifyContent:'space-between',marginHorizontal:12 , flexDirection:'row' , width:170}}>
                  <Text style={{fontSize: 16, fontWeight: '600',color:'#000'}}>{model.text}</Text>
                 
                  <Ionicons name={liked ? 'heart' : 'heart-outline' } size={ 22} color={liked ? '#0255CC' : '#000'} />
                </View>
                <View style={{marginHorizontal:12 ,flexDirection:'column'}}>
                  <Text>{model.offer}</Text>
                  <Text style={{color:'#6589DE'}}>{model.point}</Text>
                </View>
           </View>
           ))}
        
        </ScrollView>
   </View>
  );
};

const styles = StyleSheet.create({
 
  tabs: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    padding:10,
    margin:8,
    marginTop :20,
    width:100

  },

  viewcard: {flex: 1},
  image: {
    width: 60,
    height: 60,
  },
 
  viewCardIamge:{
   
    marginVertical: 15,
    marginHorizontal:10,
    
    justifyContent:'center',alignItems:'center',borderRadius:25,
    shadowColor: "#000", shadowOffset:{ width: 0, height: 3,},shadowOpacity: 0.25, shadowRadius:2.22, elevation: 5
  },

});
export default ShopOnline;
