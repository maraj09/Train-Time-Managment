import {ActivityIndicator, Image, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Text} from 'react-native-paper';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Train Time Management</Text>
      <Image
        style={styles.img}
        source={require('../../assets/images/train-station.png')}
      />
      <ActivityIndicator size={'large'} color={'#B3B6C3'} />
    </View>
  );
};

export default Splash;
