import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '@components/list/Carousel';
import styled from 'styled-components';
import Button from '@components/common/button/Button';
import recipientsAPI from '@/api/recipientsAPI';
import { API_RECIPIENTS } from '@constants/API';
import useGetRecipientsList from '@hooks/api/recipientsAPI/useGetRecipientsList';
import useGetRecipientsLikeList from '@hooks/api/recipientsAPI/useGetRecipientsLikeList';

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.4rem;
  `,
  Popular: styled.h2`
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 2.5rem;
    @media (max-width: 767px) {
      margin-bottom: 1.2rem;
      font-size: 2rem;
    }
  `,
  Recent: styled.h2`
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    margin-top: 7.4rem;
    margin-bottom: 2.5rem;
    @media (max-width: 767px) {
      margin-bottom: 1.2rem;
      font-size: 2rem;
    }
  `,
  Container1: styled.div`
    display: flex;
    gap: 1rem;
    width: 28rem;
    height: 10.4rem;
    padding: 2.4rem 0rem;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1248px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
  `,
  CarouselContainer: styled.div`
    width: 100%;
  `,
};

function PaperListPage() {
  const navigate = useNavigate();
  const goToPostPage = () => {
    navigate(`/post`);
  };
  const { data: likeData } = useGetRecipientsLikeList(
    API_RECIPIENTS.RECIPIENTS,
    recipientsAPI.getRecipientsLikeList,
    2000,
    0,
    'like',
  );
  const { data: Data } = useGetRecipientsList(
    API_RECIPIENTS.RECIPIENTS,
    recipientsAPI.getRecipientsList,
    2000,
    0,
  );
  return (
    <Styled.Container>
      <Styled.CarouselContainer>
        <div>
          <div>
            <Styled.Popular>인기 롤링 페이퍼 🔥</Styled.Popular>
          </div>
          <div>
            <Carousel data={likeData} />
          </div>
        </div>
        <div>
          <Styled.Recent>최근에 만든 롤링 페이퍼️️ ⭐️️</Styled.Recent>
        </div>
        <div>
          <Carousel data={Data} />
        </div>
      </Styled.CarouselContainer>
      <Styled.Container1>
        <Button
          onClick={goToPostPage}
          className="Button"
          size="M"
          style={{ maxWidth: '128rem', width: '100%' }}
        >
          나도 만들어보기
        </Button>
      </Styled.Container1>
    </Styled.Container>
  );
}

export default PaperListPage;
