import React from 'react';
import Button from '@components/common/button/Button';

function Sh() {
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
