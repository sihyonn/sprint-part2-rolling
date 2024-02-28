import AddIcon from '@/assets/icon/AddIcon';
import DeleteIcon from '@/assets/icon/DeleteIcon';
import ShareIcon from '@/assets/icon/ShareIcon';
import React from 'react';
import { styled } from 'styled-components';

const Styled = {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 0.4rem;

    padding: ${({ $iconType }) =>
      $iconType === 'delete' ? '0.8rem' : '0.6rem 1.6rem'};
    border: ${({ theme }) => theme.border.gr1};
    border-radius: 0.6rem;

    font-size: 1.6rem;
    font-weight: 500;

    &:hover,
    &:focus {
      background-color: #f6f6f6;
    }
    &:active {
      border: ${({ theme }) => theme.border.gr2};
      background-color: ${({ theme }) => theme.color.white};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.color.mainGr};
      color: ${({ theme }) => theme.color.white}; //아이콘 흰색으로 변경 이슈
      cursor: not-allowed;
    }
  `,
};

const ICONS = {
  add: <AddIcon />,
  share: <ShareIcon />,
  delete: <DeleteIcon />,
};

/**
 * OutlinedButton - 아웃라인이 들어간 버튼(라벨 || 아이콘라벨 || 아이콘 가능)
 * @param {string} iconType 아이콘 타입(add || share || delete)
 * @param {React.ReactNode} children 버튼의 라벨
 * @param {React.htmlAttributes} htmlButtonProps 기타 버튼 props
 */
const OutlinedButton = React.forwardRef(
  ({ iconType, children, ...htmlButtonProps }, ref) => {
    return (
      <Styled.Button ref={ref} $iconType={iconType} {...htmlButtonProps}>
        {ICONS[iconType]}
        {children}
      </Styled.Button>
    );
  },
);
OutlinedButton.displayName = 'OutlinedButton';
export default OutlinedButton;
