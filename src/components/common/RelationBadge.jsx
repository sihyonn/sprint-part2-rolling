import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '@styles/theme';

const badgeColors = {
  지인: { background: theme.color.lightOr1, color: theme.color.textOr },
  동료: { background: theme.color.lightPu1, color: theme.color.mainPu },
  가족: { background: theme.color.lightGn1, color: theme.color.textGn },
  친구: { background: theme.color.lightBl1, color: theme.color.textBl },
};

const Styled = {
  Badge: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 2.5rem;
    height: 2rem;
    padding: 0 0.8rem;
    background-color: ${({ children }) =>
      badgeColors[children]?.background || '#fff'};
    color: ${({ children }) => badgeColors[children]?.color || '#fff'};
    border-radius: 0.4rem;

    font-size: 1.4rem;
    line-height: 2rem;
  `,
};

function RelationBadge({ children = '지인' }) {
  return <Styled.Badge>{children}</Styled.Badge>;
}

RelationBadge.propTypes = {
  children: PropTypes.string,
};

export default RelationBadge;
