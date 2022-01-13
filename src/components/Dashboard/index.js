import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider, List, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectedNews from '../SelectedNews';
import {useNavigation} from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();
  console.log(navigation);
  const [headlines, setHeadlines] = useState([]);
  const [sources, setSources] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  let apiKey = '0b30b3c5a1a54f7babb254d242ce3b2f';
  useEffect(() => {
    // top headlines
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(res => setHeadlines(res.articles));
    // sources
    fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`)
      .then(res => res.json())
      .then(res => setSources(res));
  }, []);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <Text style={styles.heading}>ᴛᴏᴘ ʜᴇᴀᴅʟɪɴᴇꜱ</Text>
      {headlines?.map((item, index) => {
        return (
          <View key={index} style={styles.newsView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectedNews',{selectedNews:item})}>
              {item.urlToImage ? (
                <Image
                  source={{uri: item.urlToImage}}
                  style={styles.headlinesImg}
                />
              ) : (
                <Image
                  source={{
                    uri: 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
                  }}
                  style={styles.headlinesImg}
                />
              )}
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    letterSpacing: 4,
    fontSize: 32,
    color: '#000',
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  newsView: {
    paddingBottom: Dimensions.get('window').height * 0.05,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    borderColor: '#A9A9A9',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 10,
  },
  title: {fontSize: 20, color: '#000'},
  headlinesImg: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.95,
    alignSelf: 'center',
  },
  searchBar: {
    backgroundColor: '#f9f9f9',
    borderWidth: 2,
    width: Dimensions.get('window').width * 0.96,
    marginTop: Dimensions.get('window').height * 0.02,
    marginBottom: Dimensions.get('window').height * 0.02,
  },
});
