import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>Homepage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1ddf5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    fontSize: 24,
  },
});

export default HomeScreen;
