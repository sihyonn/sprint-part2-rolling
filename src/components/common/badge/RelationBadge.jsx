import React from 'react';
import styled, { css } from 'styled-components';

// 이제 badgeColors 대신 아래 getBadgeStyle 함수를 사용
const getBadgeStyle = (type, theme) => {
  const styles = {
    지인: { background: theme.color.lightOr1, color: theme.color.textOr },
    동료: { background: theme.color.lightPu1, color: theme.color.mainPu },
    가족: { background: theme.color.lightGn1, color: theme.color.textGn },
    친구: { background: theme.color.lightBl1, color: theme.color.textBl },
  };
  return styles[type] || { background: '#fff', color: '#000' }; // 기본 스타일을 설정
};

const StyledBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 0 0.8rem;
  gap: 1rem;
  width: 4.1rem;
  height: 2rem;
  border-radius: 0.4rem;
  /* props에서 받은 type과 theme를 이용하여 스타일을 적용합니다. */
  ${({ type, theme }) => {
    const { background, color } = getBadgeStyle(type, theme);
    return css`
      background-color: ${background};
      color: ${color};
    `;
  }}
`;

function RelationBadge({ type = '지인' }) {
  return <StyledBadge type={type}>{type}</StyledBadge>;
}

export default RelationBadge;
