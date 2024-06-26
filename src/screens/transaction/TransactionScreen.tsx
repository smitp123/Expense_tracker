import {
  TouchableIcon,
  TransactionList,
  EditCategoryModal,
  CustomStatusBar,
  SearchBar,
} from '../../components';
import {styles} from './TransactionScreenStyle';
import {TransactionImages} from '../../../assets';
import React from 'react';
import {Text, View, Image, FlatList, SafeAreaView} from 'react-native';
import {CalendarProvider, ExpandableCalendar} from 'react-native-calendars';
import {ColorConst} from '../../theme';
import {useTransactions} from './useTransactions';

const TransactionScreen: React.FC = () => {
  const {
    applyFilter,
    onEditPress,
    toggleModal,
    selectedDate,
    onDateChanged,
    onDeletePress,
    allTransactions,
    handleFilterToggle,
    onTransactionPress,
    isVisibleEditModal,
    searchText,
    onChangeText,
  } = useTransactions();

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentContainer}>
        <Image
          source={TransactionImages.empty_transaction_ic}
          style={styles.emptyImageStyle}
          resizeMode="contain"
        />
        <Text style={styles.emptyContainerText}>
          No analysis for this month
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={ColorConst.white}
        barStyle="dark-content"
      />
      <SafeAreaView />
      <CalendarProvider date={selectedDate} onDateChanged={onDateChanged}>
        <View style={styles.headerContainer}>
          <SearchBar
            placeholder="Search"
            value={searchText}
            onChangeText={onChangeText}
          />
          <View style={styles.popoverView}>
            <TouchableIcon
              source={TransactionImages.calendar_ic}
              onIconPress={handleFilterToggle}
              customIconStyle={styles.filterImage}
            />
          </View>
        </View>
        {applyFilter && (
          <ExpandableCalendar firstDay={1} style={styles.calenderStyle} />
        )}
        <FlatList
          data={allTransactions}
          renderItem={({item, index}) => {
            return (
              <TransactionList
                item={item}
                index={index}
                onTransactionPress={onTransactionPress}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmptyComponent}
        />
      </CalendarProvider>
      <EditCategoryModal
        onDeletePress={onDeletePress}
        onEditPress={onEditPress}
        isVisible={isVisibleEditModal.isVisible}
        toggleModal={toggleModal}
        items={isVisibleEditModal.item || undefined}
      />
    </View>
  );
};

export default TransactionScreen;
