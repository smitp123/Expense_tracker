import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthImages} from '../../../assets';
import {ColorConst, fontSize, fonts, hp, wp} from '../../theme';

const TransactionHeader = ({onBackPress}: {onBackPress: () => void}) => {
  return (
    <LinearGradient
      colors={[ColorConst.gradient_color1, ColorConst.gradient_color2]}
      style={[styles.linearGradient]}>
      <Image style={styles.headerImage} source={AuthImages.header_bg_ic} />
      <TouchableOpacity onPress={onBackPress}>
        <Image source={AuthImages.left_icon_ic} style={styles.leftIconStyle} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Add Transaction</Text>
      <View style={styles.leftIconStyle} />
    </LinearGradient>
  );
};

export default TransactionHeader;

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: hp(35),
    paddingTop: hp(10),
    flexDirection: 'row',
    borderBottomEndRadius: hp(5),
    borderBottomStartRadius: hp(5),
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSize(18),
    fontFamily: fonts.bold,
    color: ColorConst.white,
  },
  headerImage: {
    left: wp(-5),
    position: 'absolute',
  },
  leftIconStyle: {
    width: hp(3.44),
    height: hp(3.44),
  },
});
