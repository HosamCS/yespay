import React from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Searchbar() {
  return (
    <View
      style={{
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop:30,
        flexDirection: 'row',
        alignSelf:'center',
      }}>
      <FontAwesome5 name="search" size={25}  style={{bottom:-10 ,color:'#DDD', left:10}}/>
      <TextInput
        keyboardType="default"
        placeholder="Search"
        maxLength={30}
        style={{
          marginLeft: 15,
          fontSize: 18,
          fontWeight: 'bold',
          flex: 1,
        }}>

        </TextInput>

 
    </View>
  );
}