import React from 'react';

import imagesAPI from '@/api/imagesAPI';
import useImagesQuery from '@hooks/api/imagesAPI/useImagesQuery';
import usePostRecipientMutation from '@hooks/api/recipientsAPI/usePostRecipientMutation';
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

  // const recipientData = {
  //   name: '15팀',
  //   backgroundColor: 'beige',
  // };

  const { mutate: postRecipient } = usePostRecipientMutation();
  const handleCreateRecipient = () => {
    postRecipient({ name: '15팀 뭔가 끝이보이나?', backgroundColor: 'purple' });
  };

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
      <button onClick={handleCreateRecipient}>대상추가</button>
    </>
  );
}

export default Sh;
