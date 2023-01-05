import React, { useState } from "react";
import { StyleSheet, Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import ComingSoon from "../components/ComingSoon";
import Header from "../components/Header";

import test from '../data/dn.jpg'

import movies from '../data/data.json'
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Header />
     
     {/*  <ComingSoon /> */}
      
       <FlatList
        horizontal={true}
        data={movies}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MovieDetails", {item})}
          >
            <Image source={test} style={styles.image}/>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.textMovies}> {item.type}</Text>
              <Text style={styles.textMovies}> 1/{item.rating}</Text>
            </View>
            <View style={{alignItems: 'center', paddingTop: 10}}>
              <Text style={styles.textMovies}> {item.title}</Text>
            </View>
            
          </TouchableOpacity>
        )}
      /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0e1015',
  },
  rowMovies: {
    paddingTop: 25,
    paddingLeft: 25,
  },
  textMovies: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 24,
    marginHorizontal: 15,
},
});
