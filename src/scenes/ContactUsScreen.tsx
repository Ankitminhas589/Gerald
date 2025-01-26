import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appColors } from '../colors';

const ContactUsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Us Screen</Text>
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
  wrapperContainer: { backgroundColor: '#fff', flex: 1 },

  text: {
    fontSize: 20,
    color: appColors.primary,
  },
});

export default ContactUsScreen;
