import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import HeaderLeftImg from '../components/atoms/homeHeader/headerLeftImg/HeaderLeftImg';
import HeaderRightBurger from '../components/atoms/homeHeader/headerRightBurger/HeaderRightBurger';

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
          headerLeft: () => <HeaderLeftImg />,
          headerRight: () => <HeaderRightBurger />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
