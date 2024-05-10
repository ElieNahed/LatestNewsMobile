import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Header from '../../components/organisms/header/Header';
import Footer from '../../components/organisms/footer/Footer';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import RightArrowIcon from '../../assets/rightArrow.svg';
import CloseLogo from '../../assets/close.svg';

import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {login, signup} from '../../store/user/userSlice';
import LocalTimeCard from '../../components/molecules/timer/LocalTimeCard';
import styles from './HomeScreenStyle';
const HomeScreen = ({navigation}: any) => {
  const [page, setPage] = useState('main');
  const dispatch: AppDispatch = useDispatch();

  const accessToken = useSelector((state: any) => state.user.accessToken);

  useEffect(() => {
    if (accessToken) {
      navigation.navigate('MainScreen');
    }
  }, [accessToken]);
  const goToSignup = () => {
    setPage('signup');
  };
  const goToLogin = () => {
    setPage('login');
  };

  const handleSignupClick = () => {
    setPage('signup');
  };

  const handleCloseClick = () => {
    setPage('main');
  };

  const handleLogin = (
    email: string,
    password: string,
    token_expires_in: string | undefined,
  ) => {
    dispatch(login({email, password, token_expires_in}));
  };

  const handleSignup = (
    email: string,
    password: string,
    token_expires_in: string | undefined,
  ) => {
    dispatch(signup({email, password, token_expires_in}));
  };

  return (
    <View style={styles.container}>
      <Header />
      {page === 'main' && (
        <View style={styles.appDownloadBanner}>
          <Text style={styles.appDownloadText}>
            Get the latest news on the go with our app!
          </Text>
        </View>
      )}
      <ImageBackground
        source={require('../../assets/HomePagebg.jpg')}
        style={styles.homePageBackground}>
        <View style={styles.flexContainer}>
          <View
            style={[styles.mainContent, page !== 'main' && styles.fullWidth]}>
            <ScrollView>
              <LocalTimeCard />
              {page !== 'main' && (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleCloseClick}>
                  <CloseLogo />
                </TouchableOpacity>
              )}
              <View style={styles.topSection}>
                <Text style={styles.topSectionTitle}>Welcome to</Text>
                <Text style={styles.topSectionTitleHighlight}>News App</Text>
              </View>
              <View style={styles.bottomSection}>
                <Text style={styles.bottomSectionText}>
                  Your one-stop destination for all the latest news and stories
                  from around the globe.
                </Text>
                {page === 'main' ? (
                  <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={handleSignupClick}>
                    <Text style={styles.getStartedButtonText}>Get Started</Text>
                    <RightArrowIcon width={16} height={16} fill="#fff" />
                  </TouchableOpacity>
                ) : (
                  <View style={styles.loginContainer}>
                    {page === 'login' ? (
                      <Login
                        handleLogin={handleLogin}
                        gotToSignup={goToSignup}
                      />
                    ) : (
                      <Signup
                        handleSignup={handleSignup}
                        goToLogin={goToLogin}
                      />
                    )}
                  </View>
                )}
              </View>
              <View>{/* <DownloadCard /> */}</View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
      <Footer />
    </View>
  );
};

export default HomeScreen;
