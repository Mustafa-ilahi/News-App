import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../components/Dashboard';
import SelectedNews from '../components/SelectedNews';
import DrawerContent from '../components/DrawerContent';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="NewsDrawer" component={NewsDrawer} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="SelectedNews" component={SelectedNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const NewsDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{headerTintColor:"#474C72"}}>
      <Drawer.Screen name="ʜᴇᴀᴅʟɪɴᴇꜱ" component={Dashboard} />
    </Drawer.Navigator>
  );
};
