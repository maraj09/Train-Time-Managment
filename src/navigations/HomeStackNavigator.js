import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import HeaderLeftLogo from '../containers/home/headerLeftLogo/HeaderLeftLogo';
import HeaderRightLogo from '../containers/home/headerRightLogo/HeaderRightLogo';
import AddTrainScreen from '../screens/addTrainScreen/AddTrainScreen';

const HomeStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitleStyle: {fontSize: 17, fontWeight: '500'}}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Train Time Management',
          headerLeft: () => <HeaderLeftLogo />,
          headerRight: () => (
            <HeaderRightLogo onPress={() => console.log('train')} />
          ),
        }}
      />
      <Stack.Screen
        name="AddTrain"
        component={AddTrainScreen}
        options={{
          headerTitle: 'Add Train Name',
          headerRight: () => (
            <HeaderRightLogo onPress={() => console.log('train')} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
