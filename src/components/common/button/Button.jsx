/* eslint-disable react/prop-types */
import React from 'react';
import { styled } from 'styled-components';
import { primaryButtonStyles } from '@styles/buttonStyleBySize';

const Styled = {
  Button: styled.button`
    ${({ size }) => primaryButtonStyles[size]}
    background-color: ${({ theme }) => theme.color.mainPu};
    color: ${({ theme }) => theme.color.white};
    white-space: nowrap;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.color.hoverPu};
    }
    &:focus {
      background-color: ${({ theme }) => theme.color.focusPu};
      border: ${({ theme }) => theme.border.pu3};
    }
    &:active {
      background-color: ${({ theme }) => theme.color.pressePu};
    }
    &:disabled {
      background: ${({ theme }) => theme.color.mainGr};
      cursor: not-allowed;
    }
  `,
};

/**
 * Button - 보라색 배경을 가진 메인 공통 버튼 컴포넌트
 * @param {string} children 버튼 라벨
 * @param {string} size 버튼 사이즈(S || M || L)
 * @param {React.htmlAttributes} htmlButtonProps 기타 버튼 props
 */

function Button({ children, size = 'S', ...htmlButtonProps }) {
  return (
    <Styled.Button type="button" size={size} {...htmlButtonProps}>
      {children}
    </Styled.Button>
  );
}

export default Button;
