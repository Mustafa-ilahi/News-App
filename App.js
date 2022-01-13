import React from 'react';
import {ScrollView, View} from 'react-native';
import Dashboard from './src/components/Dashboard';
import 'react-native-gesture-handler';
import MainNavigator from './src/config/navigation';

export default function App() {
  return <MainNavigator />;
}
