import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton, MD3Colors} from 'react-native-paper';

const HeaderRightLogo = ({onPress}) => {
  return (
    <View>
      <IconButton
        icon={'train'}
        size={30}
        iconColor={MD3Colors.primary0}
        onPress={() => onPress()}
      />
    </View>
  );
};

export default HeaderRightLogo;

const styles = StyleSheet.create({});
