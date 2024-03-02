import React from 'react';
import Button from '@components/common/button/Button';
import imagesAPI from '@/api/imagesAPI';
import messagesAPI from '@/api/messagesAPI';

function Sh() {
  // 데이터 받아오기! test중~ 리액트쿼리 들어오면 변경
  const loadBackgroundImages = async () => {
    try {
      const res = await imagesAPI.getBackgroundImages();
      console.log(res);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  loadBackgroundImages();

  const cardData = async () => {
    try {
      const res = await messagesAPI.getCardMessage(1);
      console.log('카드 데이터', res);
    } catch (error) {
      console.error(error);
    }
  };
  cardData();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Button size="S">확인</Button>
        <Button size="M">구경가기</Button>
        <Button size="L">삭제하기</Button>
      </div>
    </>
  );
}

export default Sh;
