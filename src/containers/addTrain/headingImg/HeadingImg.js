import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../../../components/atoms/card/Card';
import Layout from '../../../components/atoms/layout/Layout';
import {Text} from 'react-native-paper';

const HeadingImg = () => {
  return (
    <Card>
      <Layout>
        <Image
          style={styles.img}
          source={require('../../../assets/images/instruction-secion-image.png')}
        />
        <Text style={styles.imgBottomText} variant="headlineSmall">
          Add your preferred train name here.
        </Text>
      </Layout>
    </Card>
  );
};

export default HeadingImg;

const styles = StyleSheet.create({
  imgBottomText: {
    marginTop: 15,
    fontWeight: '700',
  },
  img: {
    width: 260,
    height: 255,
    alignSelf: 'center',
  },
});
