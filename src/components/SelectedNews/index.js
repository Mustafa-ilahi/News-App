import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Linking,
} from 'react-native';
import {Divider} from 'react-native-paper';
export default function SelectedNews({route}) {
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const selectedNews = route.params.selectedNews;
  useEffect(() => {
    if (selectedNews.content) {
      setContent(selectedNews.content.split('[')[0]);
    }
    if (selectedNews.publishedAt) {
      setDate(selectedNews.publishedAt.split('T')[0]);
      setTime(selectedNews.publishedAt.split('T')[1].split('Z')[0]);
    }
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.sourceName}>{selectedNews.source.name}</Text>
        </View>
        <View style={{paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
          {selectedNews.urlToImage ? (
            <Image
              source={{uri: selectedNews.urlToImage}}
              style={styles.image}
            />
          ) : (
            <Image
              source={{
                uri: 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
              }}
              style={styles.image}
            />
          )}
        </View>
        <View
          style={{
            marginLeft: 5,
            marginRight: 5,
            padding: 10,
            borderColor: '#A9A9A9',
            shadowOffset: {width: 2, height: 2},
            shadowColor: '#fff',
            shadowOpacity: 0.25,
            borderRadius: Dimensions.get('window').height * 0.02,
            elevation: 6,
          }}>
          {selectedNews.author && (
            <View>
              <Text style={styles.heading}>ᴀᴜᴛʜᴏʀ</Text>
              <Text style={styles.content}>{selectedNews.author}.</Text>
            </View>
          )}

          <Text style={styles.heading}>ᴛɪᴛʟᴇ</Text>
          <Text style={styles.content}>{selectedNews.title}.</Text>

          <Text style={styles.heading}>ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ</Text>
          <Text style={styles.content}>{selectedNews.description}</Text>

          {selectedNews.content && (
            <View>
              <Text style={styles.heading}>ᴄᴏɴᴛᴇɴᴛ</Text>
              <Text style={styles.content}>{content}</Text>
            </View>
          )}

          <Text style={styles.heading}>ᴘᴜʙʟɪꜱʜᴇᴅ ᴀᴛ</Text>
          <Text style={styles.publishedAt}>
            Date: <Text style={styles.dateTimeColor}>{date}</Text>
          </Text>
          <Text style={styles.publishedAt}>
            Time: <Text style={{color: '#fff'}}>{time}</Text>
          </Text>
          <Text style={styles.heading}>ꜱᴏᴜʀᴄᴇ</Text>
          <Text
            style={styles.source}
            onPress={() => Linking.openURL(selectedNews.url)}>
            {selectedNews.url}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#474C72',
  },
  line: {
    marginTop: Dimensions.get('window').width * 0.03,
    borderWidth: 0.25,
  },
  sourceName: {
    fontSize: 22,
    alignSelf: 'center',
    paddingTop: 10,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif-regular',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
  },

  heading: {
    letterSpacing: 2,
    fontSize: 26,
    color: '#fff',
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingBottom: Dimensions.get('window').height * 0.003,
    paddingLeft: Dimensions.get('window').width * 0.03,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height * 0.3,
    borderBottomLeftRadius: Dimensions.get('window').width * 0.025,
    borderBottomRightRadius: Dimensions.get('window').width * 0.025,
  },
  source: {color: '#fff', paddingLeft: 10, paddingBottom: 10},

  content: {
    fontSize: 16,
    padding: Dimensions.get('window').height * 0.015,
    paddingTop: 0,
    fontFamily: 'sans-serif-regular',
    color: '#fff',
  },
  publishedAt: {
    fontSize: 18,
    padding: Dimensions.get('window').height * 0.02,
    paddingTop: 5,
    paddingBottom: 2,
    color: '#fff',
  },
  dateTimeColor: {color: '#fff'},
});
