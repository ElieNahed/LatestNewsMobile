import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './LocalTimeCardStyle';
const LocalTimeCard = () => {
  const [localTime, setLocalTime] = useState('');
  const [greeting, setGreeting] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const getCurrentTime = () => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const formattedTime = `${hour > 9 ? hour : '0' + hour}:${
        minute > 9 ? minute : '0' + minute
      }`;

      setLocalTime(formattedTime);
      setGreeting(getGreeting(hour));
      setCurrentDate(getFormattedDate(date));
    };

    const getGreeting = (hour: number) => {
      if (hour >= 5 && hour < 12) {
        return 'Good Morning';
      } else if (hour >= 12 && hour < 18) {
        return 'Good Afternoon';
      } else {
        return 'Good Evening';
      }
    };

    const getFormattedDate = (date: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return date.toLocaleDateString('en-US', options);
    };

    getCurrentTime();
    const timer = setInterval(getCurrentTime, 60000); // Update time every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{currentDate}</Text>
      <Text style={styles.greetingText}>{greeting}</Text>
      <Text style={styles.timeText}>Local Time: {localTime}</Text>
    </View>
  );
};

export default LocalTimeCard;
