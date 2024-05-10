// imitate the fetch function using axios
// then directly add the access token to the header
// and export it in a way to be used in the whole application
import axios from 'axios';
import {getValue} from './cookies';

const fetchClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

fetchClient.interceptors.request.use(
  async config => {
    const token = await getValue('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default fetchClient;
