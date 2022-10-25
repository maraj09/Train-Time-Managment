import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Layout = ({children}) => {
  return <View style={styles.layout}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
