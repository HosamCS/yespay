import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Image, View, SafeAreaView, ActivityIndicator } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const Button = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={[styles.button,props.button]}>
        <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
export const FlowBtn = (props) => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={[styles.flowBtn,props.button]}>
            <MaterialCommunityIcons name={props.iconName} color='#fff'  size={40}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: '36%',
    height: 40,
    marginTop :30,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText: {
    color: 'blue',
    fontFamily: 'open-sans',
    fontSize: 18,
    textAlign: 'center'
  },
  flowBtn:{
    backgroundColor:'orange',
    borderRadius:30,
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:20,
    bottom:30,
    shadowColor: '#000',
  }

})