import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootStackParamList} from '../../types';
import CustomTextInput from '../../components/atoms/input/CustomTextInput';
import EmailIcon from '../../assets/email.svg';
import CloseLockIcon from '../../assets/lock.svg';
import OpenLock from '../../assets/openLock.svg';
import styles from './LoginStyle';
interface LoginProps {
  handleLogin: (
    email: string,
    password: string,
    token_expires_in: string | undefined,
  ) => void;
  gotToSignup: () => void;
}

type HomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'MainScreen'
>;

const Login: React.FC<LoginProps> = ({handleLogin, gotToSignup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const loading = useSelector((state: any) => state.user.loading);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const logInError = useSelector((state: any) => state.user.error);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setError(null); // Clear error message when typing
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setError(null); // Clear error message when typing
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await handleLogin(email.toLocaleLowerCase(), password, '30m');
    } catch (err: any) {
      setError(err.message);
    }
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
      {(error || logInError) && (
        <Text style={styles.errorText}>{logInError || error}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {loading ? 'Loading ...' : 'Login'}
        </Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={gotToSignup}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
