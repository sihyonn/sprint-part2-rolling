import React, { useState } from 'react';
import styled from 'styled-components';

const Styled = {
  Input: styled.input`
    width: 100%;
    max-width: 72rem;
    padding: 1.2rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    border: ${({ $isEmpty, $isLimit, theme }) =>
      $isEmpty || $isLimit ? theme.border.rd1 : theme.border.gr1};
    background: ${({ theme }) => theme.color.white};

    color: ${({ theme }) => theme.color.textGr};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem; /* 162.5% */
    letter-spacing: -0.016rem;

    &::placeholder {
      color: ${({ theme }) => theme.color.btnGr};
    }

    &:active {
      border: ${({ theme }) => theme.border.gr4};
    }
    &:hover {
      border: ${({ theme }) => theme.border.gr2};
    }
    &:focus {
      border: ${({ theme }) => theme.border.gr3};
    }
  `,

  InputError: styled.span`
    display: flex;
    max-width: 72rem;
    width: 100%;
    color: ${({ theme }) => theme.color.red};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem; /* 150% */
  `,
};

const Input = ({ value, placeholder, onInputChange }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLimit, setIsLimit] = useState(false);

  const handleInputChange = (e) => {
    setIsEmpty(false);
    onInputChange(e.target.value);
    setIsLimit(e.target.value.length > 16);
  };
  const handleInputBlur = (e) => {
    if (!e.target.value) setIsEmpty(true);
  };

  return (
    <>
      <Styled.Input
        type="text"
        id="name"
        value={value}
        placeholder={placeholder}
        $isEmpty={isEmpty}
        $isLimit={isLimit}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      {isEmpty && <Styled.InputError>값을 입력해 주세요.</Styled.InputError>}
      {isLimit && (
        <Styled.InputError>이름은 16자 이하여야 합니다.</Styled.InputError>
      )}
    </>
  );
};

export default Input;
