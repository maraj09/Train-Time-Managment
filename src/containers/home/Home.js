import {View, Text, Image} from 'react-native';
import React from 'react';
import HomeBody from './body/HomeBody';
import Label from './label/Label';
import Content from './content/Content';

const Home = () => {
  return (
    <View>
      <HomeBody />
      <Label />
      <Content />
    </View>
  );
};

export default Home;
