import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/mainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import BootSplash from 'react-native-bootsplash';
import {getValue} from './src/utils/cookies';
import {setAccessToken} from './src/store/user/userSlice';

const App = () => {
  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const token = await getValue('accessToken');
        if (token) {
          store.dispatch(setAccessToken(token));
        }
      } catch (error) {
        console.error('Error checking access token:', error);
      } finally {
        BootSplash.hide();
      }
    };

    checkAccessToken();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
