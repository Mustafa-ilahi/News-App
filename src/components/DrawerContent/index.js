import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Text,
  Switch,
  Drawer,
  Button,
  Divider,
} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
  const [sources, setSources] = useState([]);
  let apiKey = '0b30b3c5a1a54f7babb254d242ce3b2f';

  useEffect(() => {
    // sources
    fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`)
      .then(res => res.json())
      .then(res => setSources(res));
  }, []);

  return (
    <ScrollView>
      <View style={styles.drawerContainer}>
        <DrawerContentScrollView {...props}>
          <View style={{flex: 1}}>
            <StatusBar animated="auto" />
            <Drawer.Section>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="link" color={'#fff'} size={size} />
                )}
                label="ꜱᴏᴜʀᴄᴇꜱ"
                labelStyle={styles.sources}
              />
              <Divider />
              {sources?.sources?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <Text style={styles.sourcesName}>• {item.name}</Text>
                    <Text
                      style={styles.sourcesLink}
                      onPress={() => Linking.openURL(item.url)}>
                      {item.url}
                    </Text>
                  </Fragment>
                );
              })}
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  drawerContainer: {flex: 1, backgroundColor: '#474C72'},
  sources: {
    letterSpacing: 2,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
  },
  sourcesLink: {
    color: '#fff',
    paddingLeft: Dimensions.get('window').width * 0.07,
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
  
  },
  sourcesName: {
    color: '#fff',
    paddingLeft: Dimensions.get('window').width * 0.04,
    paddingTop: Dimensions.get('window').height * 0.035,
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
    fontSize:16,
    fontWeight:'bold'
  },
  sourcesDescription: {
    color: '#fff',
    paddingLeft: Dimensions.get('window').width * 0.04,
  },
});
