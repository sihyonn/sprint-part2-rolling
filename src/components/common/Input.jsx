import React, { useState } from 'react';
import styled from 'styled-components';

const Styled = {
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,
  Input: styled.input`
    display: flex;
    width: 100%;
    padding: 1.2rem 1.6rem;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    border: ${({ theme }) => theme.border.gr1};
    background: var(--white, #fff);

    color: var(--gray-900, #181818);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem; /* 162.5% */
    letter-spacing: -0.016rem;

    ${({ isEmpty }) =>
      isEmpty &&
      `
  border: 1px solid var(--Error, #DC3A3A);`}

    &::placeholder {
      color: var(--gray-500, #555);
    }

    &:active {
      border: 2px solid var(--gray-700, #3a3a3a);
    }
    &:hover {
      border: 1px solid var(--gray-500, #555);
    }
    &:focus {
      border: 2px solid var(--gray-500, #555);
    }
  `,

  InputError: styled.span`
    color: var(--Error, #dc3a3a);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem; /* 150% */
    letter-spacing: -0.006rem;
  `,
};

const Input = ({ value, dest, onInputChange }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInputChange = (e) => {
    setIsEmpty(false);
    onInputChange(e.target.value);
  };
  const handleInputBlur = (e) => {
    if (!e.target.value) setIsEmpty(true);
  };

  return (
    <Styled.InputContainer>
      <Styled.Input
        type="text"
        id="name"
        value={value}
        placeholder={
          dest === 'to'
            ? '받는 사람 이름을 입력해 주세요.'
            : '이름을 입력해 주세요.'
        }
        isEmpty={isEmpty}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      {isEmpty && <Styled.InputError>값을 입력해 주세요.</Styled.InputError>}
    </Styled.InputContainer>
  );
};

export default Input;
