import {View, Text} from 'react-native';
import React from 'react';
import {Drawer} from 'react-native-paper';

const Home = () => {
  return (
    <Drawer.Section title="Some title">
      <Drawer.Item label="First Item" />
      <Drawer.Item label="Second Item" />
    </Drawer.Section>
  );
};

export default Home;
