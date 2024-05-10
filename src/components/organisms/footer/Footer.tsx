import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Linking} from 'react-native';

import LinkedinIcon from '../../../assets/linkedin.svg';
import InstagramIcon from '../../../assets/instagram.svg';
import FacebookIcon from '../../../assets/facebook.svg';
import styles from './FooterStyle';
const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.socialMedia}>
        <View style={styles.socialIconContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.linkedin.com/')}>
            <LinkedinIcon style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.instagram.com/')}>
            <InstagramIcon style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.facebook.com/')}>
            <FacebookIcon style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
