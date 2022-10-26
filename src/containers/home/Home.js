import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import HomeBody from './body/HomeBody';
import Label from './label/Label';
import Content from './content/Content';

const Home = () => {
  return (
    <ScrollView>
      <HomeBody />
      <Label />
      <Content />
    </ScrollView>
  );
};

export default Home;
