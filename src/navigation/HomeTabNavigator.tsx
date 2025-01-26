import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { appColors } from '../colors';
import AnimationWrapper from '../wrapper/AnimationWrapper';
import ContactUsScreen from '../scenes/ContactUsScreen';
import MainStackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <AnimationWrapper>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Tab.Navigator
          screenOptions={{
            header: TabNavigationHeader,
            tabBarActiveTintColor: appColors.primary,
            tabBarInactiveTintColor: appColors.gray,
          }}>
          <Tab.Screen
            name="Home"
            component={MainStackNavigator}
            options={{
              tabBarIcon: props => {
                return (
                  <Icon
                    name="home"
                    size={25}
                    color={
                      props.focused ? appColors.primary : appColors.lightGray
                    }
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Contact"
            component={ContactUsScreen}
            options={{
              tabBarIcon: props => {
                return (
                  <Icon
                    name="rocketchat"
                    size={25}
                    color={
                      props.focused ? appColors.primary : appColors.lightGray
                    }
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </AnimationWrapper>
  );
};

function TabNavigationHeader(props: BottomTabHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Icon
        onPress={() => props.navigation.openDrawer()}
        name="bars"
        size={25}
        color={appColors.lightGray}
      />
      <Text style={styles.header}>START</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: appColors.white,
    flex: 1,
  },
  headerContainer: {
    backgroundColor: appColors.white,
    paddingTop: 60,
    paddingLeft: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginLeft: 40,
    fontSize: 24,
    color: appColors.gray,
    letterSpacing: 5,
  },
});

export default HomeTabNavigator;
