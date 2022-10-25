import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconButton, MD3Colors} from 'react-native-paper';

const HeaderRightBurger = ({onPress}) => {
  return (
    <View>
      <IconButton
        icon={'menu'}
        size={30}
        iconColor={MD3Colors.primary0}
        onPress={() => onPress()}
      />
    </View>
  );
};

export default HeaderRightBurger;

const styles = StyleSheet.create({});
