import instance from '@/api/instance';
import { API_IMAGES } from '@constants/API';

/**
 * 백그라운드 이미지 리스트를 가져오는 API
 */
const getBackgroundImages = () => {
  return instance({
    url: API_IMAGES.BACKGROUND,
    method: 'GET',
  });
};

/**
 * 프로필 이미지 리스트를 가져오는 API
 */
const getProfileImages = () => {
  return instance({
    url: API_IMAGES.PROFILE,
    method: 'GET',
  });
};

export default {
  getBackgroundImages,
  getProfileImages,
};
