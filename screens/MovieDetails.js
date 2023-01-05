import {StyleSheet, Text, View, Button, Image} from 'react-native';
import { useRoute } from "@react-navigation/native"

import React from 'react';

import movies from '../data/data.json'

import test from '../data/dn.jpg'
import ButtonNormal from '../components/ButtonNormal';
import ButtonSelected from '../components/ButtonSelected';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MovieDetails({ navigation }) {
  const route = useRoute()
    const id = route.params.item;
  
    return (
      <View style={styles.container}>
        <View style={styles.containerBackground}>
           <Image source={test} style={styles.background}/>
        </View>
        <View style={styles.containerDetails}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <ButtonNormal title="18+"/>
            <ButtonNormal title="Action"/>
            <ButtonNormal title="Action"/>
            <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
              <ButtonNormal title="18+"/>
              <ButtonNormal title="+"/>
          </View>
          </View>
          
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.textTitle}>{id.title}</Text>
            <Text style={styles.textDesc}>{ id.type }</Text>
          </View>
          <Text style={styles.textDesc}>{ id.description }</Text>
          <Text style={styles.textDesc}>{ id.description }</Text>
          <View style={styles.rowButtons}>
            <TouchableOpacity  style={styles.button}>
            <Text style={{color: 'white'}}>Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={{color: 'white'}}>Go back</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      flex: 1,
    },
    containerBackground: {
      flex: 1,
      backgroundColor: "#0e1015"
    },
    background: {
      height: '100%',
      width: '100%', 
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    containerDetails: {
      flex: 1,
      backgroundColor: "#0e1015",
    },
    textTitle: {
      color: 'white',
      fontSize: 25,
      paddingLeft: 20,
      paddingTop: 20,
    },
    textDesc: {
      color: 'grey',
      fontSize: 15,
      fontWeight: '200',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    button: {
      backgroundColor: '#f61434',
      borderColor: '#f61434',
      borderWidth: 1,
      borderRadius: 12,
      padding: 7.5,
      margin: 7.5,
    },
    rowButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 15,
    }
  })