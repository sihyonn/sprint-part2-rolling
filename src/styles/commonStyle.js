import { styled } from 'styled-components';

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
