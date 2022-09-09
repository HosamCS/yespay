import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Scrollview,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button} from '../Button';

const {height, width} = Dimensions.get('screen');

const image = {
  uri: 'https://img.freepik.com/premium-photo/secure-online-payment-internet-banking-via-credit-card-mobile_73903-454.jpg?w=360',
};

export const Header = props => {
  return (
    <View style={{width: '100%', height: height / 3, backgroundColor: 'red'}}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Welcome Hossam 👋 </Text>
        </View>

        <View style={{height: 60, justifyContent: 'center'}}>
          <Text style={styles.text}>Your account balance is </Text>
          <Text style={[styles.text, {fontWeight: '900', fontSize: 22}]}>
            15.000 EGP{' '}
          </Text>
        </View>

        <View style={styles.ViewButtons}>
          <Button children="+   Add Money" />
          <Button children="⇄   transfer" />
          <Button children="..." button={{width: '15%'}} />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'space-around',
  },

  text: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 15,
    color: '#fff',
  },
  ViewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 20,
    marginHorizontal: 10,
  },
});
