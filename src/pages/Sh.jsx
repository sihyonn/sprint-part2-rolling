import React from 'react';

import imagesAPI from '@/api/imagesAPI';
import useImagesQuery from '@hooks/api/imagesAPI/useImagesQuery';
import { API_IMAGES } from '@constants/API';

function Sh() {
  const { data: backgroundImages } = useImagesQuery(
    API_IMAGES.BACKGROUND,
    imagesAPI.getBackgroundImages,
  );

  const { data: profileImages } = useImagesQuery(
    API_IMAGES.PROFILE,
    imagesAPI.getProfileImages,
  );

  console.log('백그라운드이미지 여기', backgroundImages);
  console.log('프로필이미지', profileImages);

  return (
    <>
      <img
        src={backgroundImages?.imageUrls[0]}
        alt="서버에서온 이미지 테스트"
        width="500rem"
      />
      <img
        src={profileImages?.imageUrls[0]}
        alt="서버에서온 이미지 테스트"
        width="300rem"
      />
    </>
  );
}

export default Sh;
