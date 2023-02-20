import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatDelete from './animation/chatDelete/ChatDelete';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ChatDelete />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
