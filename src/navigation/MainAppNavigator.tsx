import React, { useEffect } from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { appColors } from '../colors';
import { AppStyles } from '../styles';
import { DrawerProgressContext } from './Context/DrawerProgressContext';
import HomeTabNavigator from './HomeTabNavigator';

const Drawer = createDrawerNavigator();

/**
 * Main App Navigator contain Drawer
 */
const MainAppNavigator = () => {
  const [drawerState, setDrawerState] = React.useState(false);
  const containerMargin = useSharedValue(0);

  useEffect(() => {
    if (drawerState) {
      containerMargin.value = withTiming(60, { duration: 300 });
    } else {
      containerMargin.value = withTiming(0, { duration: 300 });
    }
  }, [drawerState]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            containerMargin.value,
            [0, 60],
            [0, 60],
            'clamp',
          ),
        },
      ],
      borderTopLeftRadius: interpolate(
        containerMargin.value,
        [0, 1],
        [0, 30],
        'clamp',
      ),
    };
  });

  return (
    <Animated.View style={[AppStyles.flex_1, animatedStyle]}>
      <DrawerProgressContext.Provider value={{ setDrawerState }}>
        <Drawer.Navigator
          drawerContent={(props: DrawerContentComponentProps) => (
            <CustomDrawerContent {...props} />
          )}
          screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: appColors.secondaryTintColor,
            drawerInactiveBackgroundColor: appColors.transparent,
            drawerActiveTintColor: appColors.secondarytextColor,
            drawerInactiveTintColor: appColors.drawerInactive,
            overlayColor: appColors.transparent,
            drawerStyle: {
              backgroundColor: appColors.primary,
              width: '45%',
            },
            drawerItemStyle: {
              borderRadius: 10,
              marginLeft: 10,
            },
            drawerLabelStyle: {
              fontSize: 18,
            },
            drawerType: 'slide',
            sceneStyle: {
              backgroundColor: appColors.primary,
            },
          }}>
          <Drawer.Screen name="Start" component={HomeTabNavigator} />
        </Drawer.Navigator>
      </DrawerProgressContext.Provider>
    </Animated.View>
  );
};

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <View style={AppStyles.flex_1}>
      <Text style={styles.drawerTitle}>Beka</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Your Cart"
          labelStyle={styles.drawerLabel}
          onPress={() => Alert.alert('Your cart coming soon')}
        />
        <DrawerItem
          label="Favorites"
          labelStyle={styles.drawerLabel}
          onPress={() => Alert.alert('Favorites coming soon')}
        />
        <DrawerItem
          label="Your Ordes"
          labelStyle={styles.drawerLabel}
          onPress={() => Alert.alert('Your Orders coming soon')}
        />
        <View style={styles.drawerSpacer} />
        <DrawerItem
          label="Sign out"
          labelStyle={styles.drawerLabel}
          onPress={() => Alert.alert('Sign out coming soon')}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerTitle: {
    color: appColors.white,
    marginTop: 150,
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  drawerLabel: {
    fontSize: 18,
    color: appColors.white,
    marginTop: 10,
  },
  drawerSpacer: {
    marginVertical: 50,
    height: 1,
    backgroundColor: appColors.white,
    width: '100%',
    opacity: 0.5,
  },
});

export default MainAppNavigator;
