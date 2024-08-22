import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import profileImage from "../assets/Avatar.png";

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.image} />
      <Text style={styles.textName}>Nguyễn Văn Hoàng - 21110828</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1cec8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
      width: 120,
      height: 120,
      borderRadius: 10,
      marginBottom: 20,
  },
  textName: {
    fontSize: 24,
  },
});

export default IntroScreen;
