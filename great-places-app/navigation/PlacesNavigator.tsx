import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';
import { CustomHeaderButton } from '../components/HeaderButton';
import { HeaderButtons, Item, HiddenItem } from 'react-navigation-header-buttons';
const Stack = createNativeStackNavigator();

export default function PlacesNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}>
        <Stack.Screen
          name="PlacesList"
          component={PlacesListScreen}
        />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}