import React from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {interpolatePath, parse} from 'react-native-redash';
import Svg, {G, Path} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  interpolate,
  withTiming,
  useAnimatedStyle,
  Value,
  Extrapolate,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';
import {
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native-gesture-handler';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedGroup = Animated.createAnimatedComponent(G);

export default function DeleteIcon({onPress, color}: any) {
  const rotate = useSharedValue(0);
  const progress = useSharedValue(0);
  // ⚠️ parse() cannot be executed on the UI thread
  const p1 = parse(
    'M 26.787 31.043 L 5.72 31.043 C 4.619 31.043 3.708 30.191 3.633 29.09 C -1.181 18.058 -1.53 12.185 1.825 2.216 C 1.746 1.006 2.702 -0.015 3.912 -0.015 L 28.595 -0.015 C 29.806 -0.015 30.762 1.011 30.682 2.216 C 34.388 12.941 33.808 18.815 28.874 29.09 C 28.8 30.191 27.888 31.043 26.787 31.043 Z',
  );
  const p2 = parse(
    'M 27.82 31.113 L 5.972 31.113 C 4.871 31.113 3.959 30.261 3.885 29.16 L 2.077 2.286 C 1.997 1.075 2.953 0.054 4.164 0.054 L 28.847 0.054 C 30.057 0.054 31.013 1.08 30.934 2.286 L 29.126 29.16 C 29.051 30.261 28.14 31.113 27.039 31.113 L 27.82 31.113 Z',
  );

  const animatedProps = useAnimatedProps(() => {
    // const d = interpolatePath(progress.value, [1, 0.8], [p1, p2], {
    const d = interpolatePath(
      progress.value,
      [1, 0],
      [p1, p2],
      [p1, p2, p2, p1],
      {
        extrapolateLeft: Extrapolate.CLAMP,
        extrapolateRight: Extrapolate.CLAMP,
      },
    );
    return {
      d,
    };
  });

  // attach animated props to an SVG path using animatedProps
  const rotateStyle = useAnimatedStyle(() => {
    // const deg = interpolate(progress.value, [0, 0.3], [0, 50], {
    const deg = interpolate(rotate.value, [0, 1], [0, 50], {
      extrapolateLeft: Extrapolate.CLAMP,
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [
        {translateY: 10},
        {translateX: 25},
        {rotate: `${deg}deg`},

        {translateY: -10},
        {translateX: -25},
      ],
    };
  });

  const handlePress = () => {
    rotate.value = withTiming(
      rotate.value ? 0 : 1,
      {duration: 300},
      isFinished => {
        if (isFinished) {
          // insert animation 1
          if (onPress) runOnJS(onPress)();
          // return;
          progress.value = withDelay(
            500,
            withTiming(
              progress.value ? 0 : 1,
              {
                duration: 200,
              },
              isInserted => {
                if (isInserted) {
                  // insert animation 2
                  progress.value = withTiming(
                    progress.value ? 0 : 1,
                    {
                      duration: 200,
                    },
                    done => {
                      // end rotate animation
                      rotate.value = withTiming(rotate.value ? 0 : 1, {
                        duration: 300,
                      });
                    },
                  );
                }
              },
            ),
          );
        }
      },
    );
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text>Delete</Text>
      </View>
    </Pressable>
  );
}
