import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Dashboard() {
    const [headlines, setHeadlines] = useState([])
    const [sources, setSources] = useState([])
  let apiKey = '0b30b3c5a1a54f7babb254d242ce3b2f';
  useEffect(() => {
    // top headlines
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(res => setHeadlines(res.articles))
    // sources
    fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`)
    .then(res => res.json())
    .then(res => console.log(res.sources))
  }, []);

  return (
    <View style={styles.container}>
      <Text>hello its news app here</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
