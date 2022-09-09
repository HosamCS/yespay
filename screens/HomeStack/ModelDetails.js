import {
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';

const {width, height} = Dimensions.get('screen');

const ImageProduct = props => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.imageback}>
      <ImageBackground
        source={{uri: props.image}}
        resizeMode="cover"
        imageStyle={{
          borderBottomLeftRadius :45,
          borderBottomRightRadius:45
        }}
        style={{
          width: width,
          height: height / 1.7,
          
        }}>
        <View style={styles.Headersection}>
          <View style={styles.HeaderLeft}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="return-up-back-outline" size={30} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>{props.text}</Text>
          </View>

          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={30}
              color={liked ? '#0255CC' : '#fff'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          <Image source={{uri: props.logo}} style={styles.logo} />
          <Text style={styles.title}>{props.offer} + 20% extra on outlet</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="heart" size={22} color='#0255CC'/>
            <Text style={styles.txtlike}> 750 People like this</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const Info = props => {
  return (
   <View style = {styles.purchases}>
     <Ionicons name="card-outline" size={30} color='#0255CC'/>
      <View style={{width:'70%'}}>
        <Text style={{fontSize:20 ,fontWeight:'700', color:'#0255CC' }}>Purchases</Text>
        <Text style={{fontSize:16 , color:'#000'}}>120 point using yespays card</Text>
      </View>
  </View>
)};

const ModelDetails = ({navigation, route}) => {
  const {text, offer, image, logo} = route.params;

  return (
    <View style={{flex: 1 ,}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageProduct
          image={image}
          text={text}
          offer={offer}
          logo={logo}
          navigation={navigation}
        />
        <View style={{height:28}}></View>
        <Info/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // imageback:{
  //   width: width,
  //   height: height / 1.7,
  //   borderRadius:20
  // },
  Headersection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 25,
  },
  HeaderLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90,
  },
  infoSection: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '65%',
    bottom: 50,
    left: 25,
    height: 200,
    position: 'absolute',
  },
  logo: {
    width: 60,
    height: 60,
    borderColor: '#DDD',
    borderRadius: 30,
    borderWidth: 1,
  },
  txtlike: {fontSize: 16, margin: 10, color: '#fff' , fontWeight:'600'},
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
  },
  purchases :{
    width:'90%',
    height:90,
    flexDirection:'row',
    backgroundColor:'#E6F5FC',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:15
  }
});

export default ModelDetails;
