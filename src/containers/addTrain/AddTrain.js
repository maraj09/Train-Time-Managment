import React from 'react';
import HeadingImg from './headingImg/HeadingImg';
import Content from './content/Content';
import {ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddTrain = () => {
  return (
    <KeyboardAwareScrollView extraHeight={200} enableOnAndroid>
      <HeadingImg />
      <Content />
    </KeyboardAwareScrollView>
  );
};

export default AddTrain;
