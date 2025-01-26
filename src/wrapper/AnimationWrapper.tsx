import { useDrawerProgress } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  children: React.ReactNode;
};
const AnimationWrapper = ({ children }: Props) => {
  const progress = useDrawerProgress();
  const { width } = useWindowDimensions();
  console.log(progress.value);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${interpolate(progress.value, [0, 1], [0, -10])}deg` },
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, width - 300],
          'clamp',
        ),
      },
      {
        translateY: interpolate(progress.value, [0, 1], [0, 100], 'clamp'),
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 30], 'clamp'),
    overflow: 'hidden',
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default AnimationWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
