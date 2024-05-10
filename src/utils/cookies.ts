import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store data with an expiration time
const setValue = async (
  key: string,
  value: string,
  expiryInMinutes: number,
) => {
  const now = new Date().getTime(); // Current time in milliseconds
  const expiry = now + expiryInMinutes * 60000; // Expiry time in milliseconds
  const data = JSON.stringify({value, expiry});

  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.error('AsyncStorage Error: ', error);
  }
};

// Function to retrieve data, checking if it's expired
const getValue = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      const {value, expiry} = JSON.parse(data);
      const now = new Date().getTime();

      if (now < expiry) {
        return value; // Return value if not expired
      } else {
        await AsyncStorage.removeItem(key); // Remove expired data
      }
    }
    return null; // Return null if no data or data is expired
  } catch (error) {
    console.error('AsyncStorage Error: ', error);
    return null;
  }
};
// Function to remove data
const removeValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('AsyncStorage Error: ', error);
  }
};

export {setValue, getValue, removeValue};