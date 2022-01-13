import React from 'react'
import {View,Text, StyleSheet, Image} from 'react-native'
export default function SelectedNews({route}) {
    const selectedNews = route.params.selectedNews;
    console.log(selectedNews);
    return (
        <View style={styles.container}>
            <Text>{selectedNews.title}</Text>
            <Image
                  source={{uri: selectedNews.urlToImage}}
                  style={{height:200}}
                />
        </View>
    )
}
const styles= StyleSheet.create({
    container:{

    }
})