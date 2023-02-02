import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MotiView, useAnimationState, useDynamicAnimation} from 'moti';

const ButtonLoading = () => {
  const [clicked, setClicked] = React.useState(false);
  const animationState = useAnimationState({
    from: {
      opacity: 0,
      scale: 0.9,
    },
    to: {
      opacity: 1,
      scale: 1.1,
    },
    expanded: {
      scale: 2,
    },
    active: {
      scale: 1.1,
      opacity: 1,
    },
    nonActive: {
      scale: 0.5,
      opacity: 0.5,
    },
  });
  const animation = useDynamicAnimation(() => {
    // optional function that returns your initial style
    return {
      width: 200,
      height: 60,
      borderRadius: 30,
    };
  });
  const onPress = () => {
    if (clicked === true) {
      setClicked(false);
      animationState.transitionTo('active');
    } else {
      setClicked(true);
      animationState.transitionTo('nonActive');
    }
    // if (animationState.current === 'to') {
    //   animationState.transitionTo('active');
    // }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      {/* <MotiView
          from={{
            scale: 0.1,
          }}
          animate={{scale: 1}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            backgroundColor: '#fff',
          }}></MotiView> */}
      <TouchableOpacity
        onPress={() => {
          if (clicked === true) {
            // round
            setClicked(false);
            animation.animateTo({width: 200, height: 60, borderRadius: 30});
          } else {
            setClicked(true);
            animation.animateTo({width: 60, height: 60, borderRadius: 30});
          }
        }}>
        <MotiView
          transition={{type: 'spring'}}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'purple',
          }}
          state={animation}>
          {clicked ? (
            <ActivityIndicator
              size={'large'}
              color={'#fff'}
              style={{marginTop: 10}}
            />
          ) : (
            <Text style={{color: '#fff', textAlign: 'center', marginTop: 20}}>
              {' '}
              Login
            </Text>
          )}
        </MotiView>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonLoading;

const styles = StyleSheet.create({});
