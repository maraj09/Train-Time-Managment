import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import HomeStackNavigator from './HomeStackNavigator';

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  if (!isLoading) {
    return (
      <>
        <SplashScreen />
      </>
    );
  }
  return (
    <>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default Navigation;
