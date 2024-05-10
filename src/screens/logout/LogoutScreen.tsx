import React, {useEffect} from 'react';

import {removeValue} from '../../utils/cookies';
import {useDispatch} from 'react-redux';
import {clearUserData} from '../../store/user/userSlice';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

const LogoutScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleLogout = async () => {
    await removeValue('accessToken');
    await removeValue('refreshToken');
    dispatch(clearUserData());
    navigation.navigate('Home');
  };
  useEffect(() => {
    handleLogout();
  }, []);

  return <></>;
};

export default LogoutScreen;
