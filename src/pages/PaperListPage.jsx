import React from 'react';
import Carousel from '@components/ListPage/Carousel';
import styled from 'styled-components';
import Button from '@components/common/button/Button';
const Styled = {
  H2: styled.h2`
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
  `,
  Container: styled.div`
    text-align: center;
  `,
};

function PaperListPage() {
  return (
    <>
      <div>
        <div>
          <Styled.H2>인기 롤링 페이퍼 🔥</Styled.H2>
        </div>
        <Carousel />
      </div>
      <div>
        <Styled.H2>최근에 만든 롤링 페이퍼 ⭐️️</Styled.H2>
      </div>
      <div>
        <Carousel />
      </div>
      <Styled.Container>
        <Button className="Button" size="M">
          나도 만들어보기
        </Button>
      </Styled.Container>
    </>
  );
}

export default PaperListPage;
