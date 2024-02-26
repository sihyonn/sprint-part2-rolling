import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '@styles/theme';

const badgeColors = {
  지인: { background: theme.color.lightOr1, color: theme.color.textOr },
  동료: { background: theme.color.lightPu, color: theme.color.mainPu },
  가족: { background: theme.color.lightGn1, color: theme.color.textGn },
  친구: { background: theme.color.lightBl1, color: theme.color.textBl },
};

const Styled = {
  Badge: styled.div`
    font-family: pretendard;
    display: flex;
    border-radius: 0.4rem;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.01rem;
    padding: 0 0.8rem;
    gap: 1rem;
    width: 2.5rem;
    height: 2rem;
    background-color: ${({ children }) =>
      badgeColors[children]?.background || '#fff'};
    color: ${({ children }) => badgeColors[children]?.color || '#fff'};
  `,
};

function RelationBadge({ children = '지인' }) {
  return <Styled.Badge>{children}</Styled.Badge>;
}

RelationBadge.propTypes = {
  children: PropTypes.string,
};

export default RelationBadge;
