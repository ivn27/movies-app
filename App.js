import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import MovieDetails from './screens/MovieDetails';
  
const Stack = createNativeStackNavigator();
  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
