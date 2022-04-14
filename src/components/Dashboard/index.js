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
import {useNavigation} from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();
  const [headlines, setHeadlines] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    if (month < 10) {
      month = `0${month}`;
      let todayDate = `${year}-${month}-${date}`;
      setCurrentDate(todayDate);
    } else {
      let todayDate = `${year}-${month}-${date}`;

      setCurrentDate(todayDate);
    }
  }, []);

  const onChangeSearch = query => {
    setSearchQuery(query);

    fetch(
      `https://newsapi.org/v2/everything?q=${query}&from=${currentDate}&sortBy=popularity&apiKey=${apiKey}`,
    )
      .then(res => res.json())
      .then(res => setHeadlines(res.articles));
  };

  let apiKey = '0b30b3c5a1a54f7babb254d242ce3b2f';
  useEffect(() => {
    // top headlines
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(res => setHeadlines(res.articles));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
          placeholderTextColor={'#fff'}
          iconColor="#fff"
          inputStyle={{color:'#fff'}}
        />
        <Text style={styles.heading}>Breaking News</Text>
        {headlines?.map((item, index) => {
          return (
            <View key={index} style={styles.newsView}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SelectedNews', {selectedNews: item})
                }>
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#474C72',
  },
  heading: {
    fontSize: 22,
    color: '#fff',
    paddingBottom: 10,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
  },
  newsView: {
    borderRadius: Dimensions.get('window').height * 0.02,
    paddingLeft: Dimensions.get('window').height * 0.02,
    paddingRight: Dimensions.get('window').height * 0.02,
    margin: Dimensions.get('window').height * 0.02,
    borderColor: '#fff',
    shadowOffset: {width: 3, height: 3},
    shadowColor: '#fff',
    shadowOpacity: 0.25,
    elevation: 10,
    backgroundColor: '#474C72',
    width: Dimensions.get('window').width * 0.9,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
    paddingTop: Dimensions.get('window').height * 0.02,
    paddingBottom: Dimensions.get('window').height * 0.02,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
  },
  headlinesImg: {
    height: Dimensions.get('window').height * 0.25,
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    borderTopLeftRadius: Dimensions.get('window').width * 0.05,
    borderTopRightRadius: Dimensions.get('window').width * 0.05,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#fff',
    width: Dimensions.get('window').width * 0.96,
    marginTop: Dimensions.get('window').height * 0.02,
    marginBottom: Dimensions.get('window').height * 0.02,
    backgroundColor: '#474C72',
    
  },
});
