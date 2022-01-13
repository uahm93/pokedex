import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/* Screens */
import DetailScreen from './source/components/Details';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );

}

const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailScreen
  }
}, { initialRouteName: 'Details' });

export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
