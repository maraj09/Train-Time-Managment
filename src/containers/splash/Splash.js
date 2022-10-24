import {ActivityIndicator, Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/images/train-station.png')}
      />
      <ActivityIndicator size={'large'} color={'#B3B6C3'} />
    </View>
  );
};

export default Splash;
