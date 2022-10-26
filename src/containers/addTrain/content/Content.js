import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React from 'react';
import Card from '../../../components/atoms/card/Card';
import Layout from '../../../components/atoms/layout/Layout';
import {Button, Text, TextInput} from 'react-native-paper';

const Content = () => {
  return (
    <View style={styles.contentView}>
      <Card>
        <Layout>
          <Text variant="bodyLarge" style={styles.titleTxt}>
            Add Here:
          </Text>
          <TextInput mode="outlined" label={'Enter Train Name'} />
          <View style={styles.btnView}>
            <Button mode="contained">Add Train & Go To List</Button>
            <Button mode="text" style={styles.textBtn}>
              Add One More
            </Button>
          </View>
        </Layout>
      </Card>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  titleTxt: {
    marginVertical: 5,
  },
  contentView: {
    marginTop: 10,
  },
  btnView: {
    marginTop: 30,
  },
  textBtn: {
    marginVertical: 10,
  },
});
