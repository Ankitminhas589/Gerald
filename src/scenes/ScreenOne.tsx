import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScreenOne: React.FC = () => {
  const navigation = useNavigation();

  const navigateToScreenTwo = () => {
    navigation.navigate('ScreenTwo');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen One</Text>

      <Text onPress={navigateToScreenTwo} style={styles.link}>
        Go to Screen two
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  link: {
    color: 'blue',
    marginTop: 20,
  },
});

export default ScreenOne;
