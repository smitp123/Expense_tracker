import React from 'react';
import {useSelector} from 'react-redux';
import {useProfile} from './useProfile';
import {HomeImages} from '../../../../assets';
import {styles} from './ProfileScreenStyle';
import {ProfileStrings} from '../../../constants/String';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {AuthReducerType} from '../../../interface';
import {
  CustomStatusBar,
  MenuItemList,
  TouchableIcon,
  UpdateNameModal,
} from '../../../components';
import {ColorConst} from '../../../theme';

const ProfileScreen: React.FC = () => {
  const {userData} = useSelector(
    (state: {authReducer: AuthReducerType}) => state?.authReducer,
  );

  const {
    MenuItem,
    onItemPress,
    onToggleModal,
    isUpdateModalVisible,
    userName,
    onChangeText,
    onSubmitPress,
  } = useProfile();

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={ColorConst.white}
        barStyle="dark-content"
      />
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <View style={styles.userNameView}>
          <Text style={styles.userName}>{ProfileStrings.username}</Text>
          <Text style={styles.userNameText}>{userData?.userName}</Text>
        </View>
        <TouchableIcon
          onIconPress={onToggleModal}
          source={HomeImages.edit_ic}
          customIconStyle={styles.editIcon}
        />
      </View>
      <FlatList
        bounces={false}
        data={MenuItem}
        style={styles.flatlist}
        renderItem={({item}) => {
          return <MenuItemList item={item} onItemPress={onItemPress} />;
        }}
      />
      <UpdateNameModal
        onSubmitPress={onSubmitPress}
        onChangeText={onChangeText}
        userName={userName}
        isVisible={isUpdateModalVisible}
        toggleModal={onToggleModal}
      />
    </View>
  );
};

export default ProfileScreen;
