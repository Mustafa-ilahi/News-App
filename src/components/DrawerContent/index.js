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
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={{flex: 1}}>
            <StatusBar animated="auto" />
            <Drawer.Section>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="link" color={'#474C72'} size={size} />
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
  sources: {
    letterSpacing: 2,
    fontSize: 20,
    color: '#474C72',
    fontWeight: 'bold',
  },
  sourcesLink: {
    color: 'blue',
    paddingLeft: Dimensions.get('window').width * 0.04,
  },
  sourcesName: {
    color: '#000',
    paddingLeft: Dimensions.get('window').width * 0.04,
    paddingTop: Dimensions.get('window').height * 0.035,
  },
  sourcesDescription: {
    color: '#000',
    paddingLeft: Dimensions.get('window').width * 0.04,
  },
});
