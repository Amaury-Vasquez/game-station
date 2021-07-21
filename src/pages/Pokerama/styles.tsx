import styled from 'styled-components';

export const Board = styled.div<{ columns: number }>`
  height: var(--content-height);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: 1vw;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5vw;
  }
`;

export const Restart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin: 0 auto;
  position: relative;
  top: 2%;
  & > svg {
    font-size: 2rem;
    color: var(--loading-red);
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    top: 0%;
    & > svg {
      font-size: 1.5rem;
    }
  }
`;
