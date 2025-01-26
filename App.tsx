import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainAppNavigator from './src/navigation/MainAppNavigator';

function App() {
  return (
    <NavigationContainer>
      <MainAppNavigator />
    </NavigationContainer>
  );
}

export default App;
