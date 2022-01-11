import 'react-native-gesture-handler';
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  Text
} from 'react-native'
import AppNavigator from './src/navigation/AppNavigator'
import { enableScreens } from 'react-native-screens'
import { ColorSet } from './src/styles';

function App() {
  enableScreens();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={ColorSet.secondary} barStyle={'dark-content'} />
      <AppNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSet.secondary,
  },
})

export default App
