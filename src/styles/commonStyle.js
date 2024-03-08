import { css, styled } from 'styled-components';

export const GridTemplate = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;

  grid-template-columns: repeat(auto-fill, minmax(38.4rem, 1fr));
  grid-gap: 2.8rem 2.4rem;

  @media (min-width: 768px) and (max-width: 1247px) {
    grid-template-columns: repeat(2, minmax(35.2rem, 1fr));
    grid-gap: 1.6rem;
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.6rem;
  }
`;

export const Shimmer = styled.div`
  width: 70%;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 50px 50px #e0e0e0;
  animation: loading 2s infinite;
  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;

export const skeletonStyle = css`
  background-color: ${({ theme }) => theme.color.skeleton};
  overflow: hidden;
  border-radius: 0.25rem;
`;

export const mapColorToTheme = (color, theme) => {
  switch (color) {
    case 'beige':
      return theme.color.lightOr2;
    case 'purple':
      return theme.color.lightPu2;
    case 'blue':
      return theme.color.lightBl2;
    case 'green':
      return theme.color.lightGn2;
    default:
      return null;
  }
};
