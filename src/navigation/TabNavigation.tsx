import React from 'react';
import {
  HomeStackNavigator,
  ProfileStackNavigator,
  AddTransactionNavigator,
  StatisticsStackNavigator,
} from './index';
import {RootPage, TabStack} from './type';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransactionStackNavigator from './transactionStackNavigator/TransactionStackNavigator';
import {AuthImages, HomeImages} from '../../assets';
import {ColorConst, hp} from '../theme';

const Tab = createBottomTabNavigator<TabStack>();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={RootPage.Home}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused ? AuthImages.home_focuse_ic : AuthImages.home_ic
                }
                style={styles.iconStyle}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={RootPage.Transaction}
        component={TransactionStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? AuthImages.transaction_focuse_ic
                    : AuthImages.transaction_ic
                }
                style={styles.iconStyle}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={RootPage.AddTransaction}
        component={AddTransactionNavigator}
        options={{
          unmountOnBlur: true,
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({}) => {
            return (
              <Image
                style={styles.addIconStyle}
                source={HomeImages.add_category_ic}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={RootPage.Statistics}
        component={StatisticsStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? AuthImages.statitics_focuse_icon
                    : AuthImages.staitics_ic
                }
                style={styles.iconStyle}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={RootPage.Profile}
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused ? AuthImages.profile_focuse_ic : AuthImages.profile_ic
                }
                style={styles.iconStyle}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorConst.white,
  },
  textStyle: {
    marginTop: hp(1),
  },
  iconStyle: {
    width: hp(3),
    height: hp(3),
  },
  addIconStyle: {
    width: hp(6),
    height: hp(6),
    marginBottom: hp(5),
  },
});
