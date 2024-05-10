import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

import NewsScreen from '../screens/news/NewsScreen';
import LogoutScreen from '../screens/logout/LogoutScreen';

const Drawer = createDrawerNavigator();

const HeaderDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyle,
        headerShown: false,
        headerTintColor: '#000',
        drawerActiveTintColor: '#ffff',
        drawerActiveBackgroundColor: 'gray',
        drawerInactiveTintColor: 'gray',
        drawerPosition: 'right',
        drawerType: 'slide',
      }}>
      <Drawer.Screen name="NewsScreen" component={NewsScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#333',
  },
});

export default HeaderDrawer;
