import {StyleSheet, Text, View, Button} from 'react-native';
import { useRoute } from "@react-navigation/native"

import React from 'react';

import movies from '../data/data.json'
export default function MovieDetails({ navigation }) {
  const route = useRoute()
    const id = route.params.item;
  
    return (
      <View>
        <Text>ahoj {id.title}</Text>
        <Text>ahoj {id.type}</Text>
      </View>
    );
  }