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
  console.log(selectedNews);
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
        <Text style={styles.sourceName}>{selectedNews.source.name}</Text>
        <Divider style={styles.divider} />
        {selectedNews.author && (
          <>
            <Text style={styles.heading}>ᴀᴜᴛʜᴏʀ</Text>
            <Text style={styles.content}>{selectedNews.author}.</Text>
          </>
        )}
        {selectedNews.urlToImage ? (
          <Image source={{uri: selectedNews.urlToImage}} style={styles.image} />
        ) : (
          <Image
            source={{
              uri: 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
            }}
            style={styles.image}
          />
        )}
        <Text style={styles.heading}>ᴛɪᴛʟᴇ</Text>
        <Text style={styles.content}>{selectedNews.title}.</Text>
        <Text style={styles.heading}>ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ</Text>
        <Text style={styles.content}>{selectedNews.description}</Text>
        {selectedNews.content && (
          <>
            <Text style={styles.heading}>ᴄᴏɴᴛᴇɴᴛ</Text>
            <Text style={styles.content}>{content}</Text>
          </>
        )}
        <Text style={styles.heading}>ᴘᴜʙʟɪꜱʜᴇᴅ ᴀᴛ</Text>
        <Text style={styles.publishedAt}>
          Date: <Text style={styles.dateTimeColor}>{date}</Text>
        </Text>
        <Text style={styles.publishedAt}>
          Time: <Text style={{color: 'red'}}>{time}</Text>
        </Text>
        <Text style={styles.heading}>ꜱᴏᴜʀᴄᴇ</Text>
        <Text
          style={styles.source}
          onPress={() => Linking.openURL(selectedNews.url)}>
          {selectedNews.url}
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  divider: {marginTop: Dimensions.get('window').height * 0.01},
  sourceName: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 10,
    letterSpacing: 4,
    color: '#000',
    fontWeight: 'bold',
  },
  heading: {
    letterSpacing: 2,
    fontSize: 26,
    color: '#000',
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingBottom: Dimensions.get('window').height * 0.003,
    paddingLeft: Dimensions.get('window').width * 0.03,
    fontWeight: 'bold',
  },
  image: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.97,
    alignSelf: 'center',
  },
  source: {color: 'blue', paddingLeft: 10, paddingBottom: 10},

  content: {
    fontSize: 20,
    padding: Dimensions.get('window').height * 0.015,
    paddingTop: 0,
  },
  publishedAt: {
    fontSize: 18,
    padding: Dimensions.get('window').height * 0.02,
    paddingTop: 5,
    paddingBottom: 2,
    color: '#000',
    fontWeight: '300',
  },
  dateTimeColor: {color: 'red'},
});
