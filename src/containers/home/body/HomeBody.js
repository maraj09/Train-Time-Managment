import {Image, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Text} from 'react-native-paper';
import Card from '../../../components/atoms/card/Card';
import Layout from '../../../components/atoms/layout/Layout';

const HomeBody = () => {
  return (
    <Card>
      <Layout>
        <View style={styles.bodyContent}>
          <Image source={require('../../../assets/images/search.png')} />
          <Image source={require('../../../assets/images/select.png')} />
        </View>
        <Text style={styles.text} variant="headlineMedium">
          Search, Select and Add Stoppages of Trains.
        </Text>
      </Layout>
    </Card>
  );
};

export default HomeBody;
