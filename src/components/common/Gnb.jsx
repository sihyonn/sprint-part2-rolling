import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '@/assets/RollingIcon.svg';

const Styled = {
  Container: styled.nav`
    display: flex;
    width: 100vw;
    height: 6.7rem;
    align-items: center;
    padding: 0 max(2.4rem, calc((100vw - 120rem) / 2));
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: ${({ theme }) => theme.color.white};
    border-bottom: 1px solid #ededed;
  `,
  GnbContainer: styled.div`
    display: flex;
    width: 100%;
    padding: 1.1rem 0;
    justify-content: space-between;
  `,
  LogoFrame: styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    text-decoration: none;
    .logoName {
      color: #4a494f;
      text-align: center;
      font-family: Poppins;
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  `,
  MakeRollingButton: styled(Link)`
    padding: 0.8rem 1.6rem;
    border-radius: 0.6rem;
    border: ${({ theme }) => theme.border.gr1};
    background: ${({ theme }) => theme.color.white};
    color: #181818;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.6rem;
    letter-spacing: -0.02rem;
    text-decoration: none;
  `,
};

function Gnb() {
  const location = useLocation();
  const { pathname } = location;

  const visibeButton = pathname === '/list' || pathname === '/';

  return (
    <Styled.Container>
      <Styled.GnbContainer>
        <Styled.LogoFrame to="/">
          <img src={Icon} alt="Logo" />
          <span className="logoName">Rolling</span>
        </Styled.LogoFrame>
        {visibeButton && (
          <Styled.MakeRollingButton to="/post">
            롤링 페이퍼 만들기
          </Styled.MakeRollingButton>
        )}
      </Styled.GnbContainer>
    </Styled.Container>
  );
}

export default Gnb;
