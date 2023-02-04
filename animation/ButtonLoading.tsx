import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MotiView, useAnimationState, useDynamicAnimation} from 'moti';

const ButtonLoading = () => {
  const [clicked, setClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const animation = useDynamicAnimation(() => {
    // optional function that returns your initial style
    return {
      width: Dimensions.get('screen').width / 1.3,
      height: 50,
      backgroundColor: 'purple',
      borderRadius: 30,
    };
  });
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'morpheus',
          job: 'leader',
        }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    if (!isLoading) {
      setClicked(false);
      animation.animateTo({
        width: Dimensions.get('screen').width / 1.3,
        height: 50,
        borderRadius: 30,
      });
    }
  }, [isLoading]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
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
          handleSubmit();
        }}>
        {/* <MotiView
          transition={{type: 'spring'}}
          style={{
            width: Dimensions.get('screen').width / 1.3,
            height: 50,
            backgroundColor: 'purple',
            borderRadius: 30,
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
        </MotiView> */}
        <MotiView
          transition={{type: 'spring'}}
          style={{
            width: Dimensions.get('screen').width / 1.3,
            height: 50,
            backgroundColor: 'purple',
            borderRadius: 30,
          }}
          state={animation}>
          {clicked ? (
            <ActivityIndicator
              size={'large'}
              color={'#fff'}
              style={{marginTop: 10}}
            />
          ) : (
            <Text style={{color: '#fff', textAlign: 'center', marginTop: 15}}>
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
