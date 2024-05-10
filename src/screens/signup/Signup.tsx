import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CustomTextInput from '../../components/atoms/input/CustomTextInput';
import EmailIcon from '../../assets/email.svg';
import CloseLockIcon from '../../assets/lock.svg';
import OpenLock from '../../assets/openLock.svg';
import {useSelector} from 'react-redux';
import styles from './SignUpStyle';
interface SignupProps {
  handleSignup: (
    email: string,
    password: string,
    token_expires_in: string | undefined,
  ) => void;
  goToLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({handleSignup, goToLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const signUpError = useSelector((state: any) => state.user.error);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setError(null); // Clear error message when typing
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setError(null); // Clear error message when typing
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setError(null); // Clear error message when typing
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    handleSignup(email.toLocaleLowerCase(), password, '30m');
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        icon={<EmailIcon width={20} height={20} />}
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={!passwordVisible}
        icon={
          passwordVisible ? (
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <OpenLock width={20} height={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <CloseLockIcon width={20} height={20} />
            </TouchableOpacity>
          )
        }
      />
      <CustomTextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        secureTextEntry={!confirmPasswordVisible}
        icon={
          confirmPasswordVisible ? (
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
              <OpenLock width={20} height={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
              <CloseLockIcon width={20} height={20} />
            </TouchableOpacity>
          )
        }
      />
      {(error || signUpError) && (
        <Text style={styles.errorText}>{signUpError || error}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.signupLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
