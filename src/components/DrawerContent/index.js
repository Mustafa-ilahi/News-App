import React, {useEffect, useState} from 'react';
import {View, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Text, Switch, Drawer, Button} from 'react-native-paper';
export default function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1}}>
          <StatusBar animated="auto" />
          <Drawer.Section style={{marginTop: 15}}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="logout" color={color} size={size} />
              )}
              label="Sign Out"
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({});
