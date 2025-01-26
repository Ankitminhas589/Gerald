import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ScreenOne from '../scenes/ScreenOne';
import ScreenTwo from '../scenes/Screentwo';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
