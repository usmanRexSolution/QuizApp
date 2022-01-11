import * as React from 'react';
import { NavigationContainer , } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  QuizScreen,
} from '../screens'

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="QuizScreen" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
