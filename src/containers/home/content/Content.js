import {View} from 'react-native';
import React from 'react';
import Layout from '../../../components/atoms/layout/Layout';
import styles from './styles';
import {IconButton, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Content = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <View style={styles.content}>
        <View style={styles.btnContent}>
          <IconButton icon={'train'} size={50} mode={'contained-tonal'} />
          <Text variant="labelLarge">Trains</Text>
        </View>
        <View style={styles.btnContent}>
          <IconButton
            icon={'plus'}
            size={50}
            mode={'contained-tonal'}
            onPress={() => navigation.navigate('AddTrain')}
          />
          <Text variant="labelLarge">Add</Text>
        </View>
      </View>
    </Layout>
  );
};

export default Content;
