import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderLeftImg = () => {
  return (
    <View>
      <Image
        style={styles.img}
        source={require('../../../../assets/images/train-station.png')}
      />
    </View>
  );
};

export default HeaderLeftImg;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
