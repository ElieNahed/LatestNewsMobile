import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import MenuButton from '../../../assets/menubutton.svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import styles from './HeaderStyle';
const Header = () => {
  const navigation = useNavigation();
  const accessToken = useSelector((state: any) => state.user.accessToken);

  const menuToggle = () => {
    navigation.toggleDrawer();
  };

  // Check if navigation is ready before accessing toggleDrawer function
  const isNavigationReady = navigation && navigation.toggleDrawer;

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Latest News</Text>

      {accessToken && isNavigationReady && (
        <Pressable onPress={menuToggle}>
          <MenuButton width={20} height={20} style={styles.menuButton} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;
