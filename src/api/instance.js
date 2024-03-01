import { API_IMAGES } from '@constants/API';
import axios from 'axios';

const baseURL = process.env.REACT_APP_ROLLING_BaseURL;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    // background-images, profile-images 요청이 아닌 경우 url에 '4-15' 넣어 요청
    if (
      !config.url.includes(API_IMAGES.BACKGROUND) &&
      !config.url.includes(API_IMAGES.PROFILE)
    ) {
      config.url = `/4-15${config.url}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert(`‼️[ERROR] ${error.response.data.message} `);
    return Promise.reject(error);
  },
);

export default instance;
