// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Anime from './components/AnimeSlider'
import Manga from './components/MangaSlider'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Anime" 
        component={Anime} 
        options={{ title: 'Anime Section' }}
      />
      <Stack.Screen 
        name="Manga" 
        component={Manga} 
        options={{ title: 'Manga Section' }}
      />
  
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}