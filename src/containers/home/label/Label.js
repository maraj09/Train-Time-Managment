import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Text} from 'react-native-paper';
import Layout from '../../../components/atoms/layout/Layout';

const Label = () => {
  return (
    <View style={styles.label}>
      <Layout>
        <Text variant="titleMedium" style={styles.text}>
          Created By: Md Maraj Rashid.
        </Text>
      </Layout>
    </View>
  );
};

export default Label;
