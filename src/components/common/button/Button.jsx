import React from 'react';
import { styled } from 'styled-components';

const SIZE = {
  S: { padding: '0.7rem 1.6rem', width: '12rem' },
  M: { padding: '1.4rem 2.4rem', width: '28rem' },
  L: { padding: '1.4rem 2.4rem', width: '72rem' },
};

const getButtonStyleBySize = (size) => SIZE[size] || SIZE.S;

const Styled = {
  Button: styled.button`
    max-width: ${({ size }) => getButtonStyleBySize(size).width};
    padding: ${({ size }) => getButtonStyleBySize(size).padding};
    border-radius: ${({ size }) => (size === 'S' ? '0.6rem' : '1.2rem')};
    background-color: ${({ theme }) => theme.color.mainPu};
    color: ${({ theme }) => theme.color.white};

    font-size: ${({ size }) => (size === 'S' ? '1.6rem' : '1.8rem')};
    font-weight: ${({ size }) => (size === 'S' ? '400' : '700')};
    line-height: ${({ size }) => (size === 'S' ? '2.6rem' : '2.8rem')};
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
