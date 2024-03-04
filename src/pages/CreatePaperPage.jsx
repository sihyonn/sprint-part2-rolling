import React, { useState } from 'react';
import styled from 'styled-components';

import Option from '@components/common/Option';
import Input from '@components/common/form/Input';
import ToggleButton from '@components/common/button/ToggleButton';
import Button from '@components/common/button/Button';
import { PLACEHOLDER } from '@constants/PLACEHOLDER';
import usePostRecipientMutation from '@hooks/api/recipientsAPI/usePostRecipientMutation';
import { useNavigate } from 'react-router-dom';

const Styled = {
  ToSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
  `,
  BackgroundSection: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 72rem;
    margin-top: 5rem;
    margin-bottom: 6.9rem;
    @media (min-width: 768px) and (max-width: 1247px) {
      margin-bottom: 34rem;
    }
    @media (max-width: 767px) {
      margin-top: 4.8rem;
      margin-bottom: 8.2rem;
    }
  `,
  Text: styled.h1`
    display: flex;
    width: 100%;
    max-width: 72rem;

    color: ${({ theme }) => theme.color.textGr};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.2rem; /* 175% */
    letter-spacing: -0.024rem;
  `,
  SubText: styled.h2`
    width: 100%;
    margin-top: 0.4rem;
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.color.btnGr};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem; /* 162.5% */
    letter-spacing: -0.016rem;
  `,
  Toggle: styled(ToggleButton)`
    margin-bottom: 4.5rem;
    @media (min-width: 768px) and (max-width: 1247px) {
      margin-bottom: 4rem;
    }
    @media (max-width: 767px) {
      margin-bottom: 2.8rem;
    }
  `,
};

function CreatePaperPage() {
  const [name, setName] = useState('');
  const [toggledValue, setToggledValue] = useState('컬러');
  const [background, setBackground] = useState({ color: 'beige', img: null });
  const navigate = useNavigate();

  const handleInputChange = (value) => {
    setName(value);
  };
  const handleToggledValue = (value) => {
    setToggledValue(value);
  };
  const handleBackground = (type, value) => {
    setBackground((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
  const { postRecipient } = usePostRecipientMutation();
  const handleCreateRecipient = async () => {
    try {
      const response = await postRecipient({
        name: name,
        backgroundColor: background.color,
        backgroundImageURL: background.img,
      });
      navigate(`/post/${response['data']['id']}`, { replace: true });
    } catch (error) {
      console.error('Failed to create recipient', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Styled.ToSection>
        <Styled.Text>To.</Styled.Text>
        <Input
          placeholder={PLACEHOLDER.TO}
          value={name}
          onInputChange={(value) => handleInputChange(value)}
        />
      </Styled.ToSection>

      <Styled.BackgroundSection>
        <Styled.Text>배경화면을 선택해 주세요.</Styled.Text>
        <Styled.SubText>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </Styled.SubText>

        <Styled.Toggle onToggle={handleToggledValue} />

        <Option
          background={toggledValue === '컬러' ? 'color' : 'img'}
          onSelect={handleBackground}
        />
      </Styled.BackgroundSection>

      <Button
        size="L"
        disabled={!name}
        style={{ width: '100%', marginBottom: '2.4rem' }}
        onClick={handleCreateRecipient}
      >
        생성하기
      </Button>
    </div>
  );
}

export default CreatePaperPage;
