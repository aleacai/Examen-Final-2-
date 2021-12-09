import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CineProvider from './Context';
import StackNavigator from './StackNavigator';




export default function App() {
  return (
    <CineProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
      </CineProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
