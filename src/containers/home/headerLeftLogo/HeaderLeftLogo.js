import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderLeftLogo = () => {
  return (
    <View>
      <Image
        style={styles.img}
        source={require('../../../assets/images/train-station.png')}
      />
    </View>
  );
};

export default HeaderLeftLogo;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
