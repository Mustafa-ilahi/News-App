import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import SelectedNews from '../components/SelectedNews';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="SelectedNews" component={SelectedNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
