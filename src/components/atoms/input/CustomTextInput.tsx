import React from 'react';
import {View, TextInput, TextInputProps, StyleSheet} from 'react-native';
import styles from './CustomTextInputStyle';
interface CustomTextInputProps extends TextInputProps {
  icon?: JSX.Element;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({icon, ...props}) => {
  return (
    <View style={styles.inputContainer}>
      {icon && <View style={styles.inputIcon}>{icon}</View>}
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
};

export default CustomTextInput;
