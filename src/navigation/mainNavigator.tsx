// MainNavigation.tsx
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LogoutScreen from '../screens/logout/LogoutScreen';
import {getValue} from '../utils/cookies';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';
import {refreshToken} from '../store/user/userSlice';

import HeaderDrawer from './HeaderDrawer';

const MainStackNavigator = createNativeStackNavigator();

const MainNavigation = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user); // Select user from state

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getValue('accessToken');
      const RToken = await getValue('refreshToken');
      if (!accessToken && RToken && !user.userData) {
        // Check if userData exists
        dispatch(
          refreshToken({token: RToken.toString(), token_expires_in: '30m'}),
        );
      }
    };
    fetchData();
  }, []);

  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="MainScreen"
        component={HeaderDrawer}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="Logout"
        component={LogoutScreen}
        options={{headerShown: false}}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigation;
