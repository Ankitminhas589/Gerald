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

  const animatedStyle = useAnimatedStyle(() => {
    const rotation = `${interpolate(progress.value, [0, 1], [0, -10])}deg`;
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [0, width - 300],
      'clamp',
    );
    const translateY = interpolate(progress.value, [0, 1], [0, 100], 'clamp');
    const borderRadius = interpolate(progress.value, [0, 1], [0, 30], 'clamp');

    return {
      transform: [
        { rotate: rotation },
        { translateX: translateX },
        { translateY: translateY },
      ],
      borderRadius: borderRadius,
      overflow: 'hidden',
    };
  });

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
