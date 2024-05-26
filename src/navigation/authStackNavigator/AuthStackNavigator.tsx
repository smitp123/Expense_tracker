import React from 'react';
import {AuthNavigationType, RootPage} from '../type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, OnBoardingScreen, SignUpScreen} from '../../screens';

const AuthStack = createNativeStackNavigator<AuthNavigationType>();

const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name={RootPage.OnBoarding}
        component={OnBoardingScreen}
      />
      <AuthStack.Screen name={RootPage.LoginScreen} component={LoginScreen} />
      <AuthStack.Screen name={RootPage.SignUpScreen} component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
