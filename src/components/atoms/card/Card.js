import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MD3Colors} from 'react-native-paper';

const Card = ({children}) => {
  return <View style={styles.body}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  body: {
    backgroundColor: MD3Colors.neutral100,
  },
});
