/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/TabScreens/Home';
import Wallet from './screens/TabScreens/Wallet';
import Profile from './screens/TabScreens/Profile';
import Status from './screens/TabScreens/Status';
import ShopOnline from './screens/HomeStack/ShopOnline'; 
import ModelDetails from './screens/HomeStack/ModelDetails'
// import HomeStackScreen from './screens/TabScreens/Home'
import  Icon from 'react-native-vector-icons/FontAwesome'



const Stack = createNativeStackNavigator();

const StackHomeScreen = () => (
  <Stack.Navigator  initialRouteName='Home' >
    <Stack.Screen name='Home' component={Home} options={{headerShown: false}}  />

    <Stack.Screen name='ShopOnline' component={ShopOnline} />
    <Stack.Screen name='ModelDetails' component={ModelDetails }  options={{headerShown: false}}/>

  </Stack.Navigator>
)

       

const Tab = createBottomTabNavigator();

const Root = () => (
  <NavigationContainer>
    <Tab.Navigator 
     screenOptions={({ route }) => ({
      tabBarIcon: ({  color }) => {
          let iconName
          if(route.name === 'Home') iconName = 'home' 
          if(route.name === 'Profile') iconName = 'user'
          if(route.name ==='Wallet') iconName ='credit-card'
          if(route.name === 'Status') iconName = 'bolt'
          
        return <Icon name={iconName} size={25} color={color} />;
      },
      headerShown:false
    })}
    tabBarOptions={{
      activeTintColor: "#4263EB",
      inactiveTintColor: '#DDD',
      style:{backgroundColor:"#000",borderTopWidth:0}}} 
    >
      <Tab.Screen name='Home' component={StackHomeScreen}/>
      <Tab.Screen name='Status' component={Status}/>
      <Tab.Screen name='Wallet' component={Wallet} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>

  </NavigationContainer>
)


const App =() => {
  return (
   <Root />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
