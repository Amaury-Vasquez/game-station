import styled from "styled-components";

export const Game = styled.div`
  width: 45vw;
  height: auto;
  border: 1px solid (var--gray);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 10vh;
  grid-gap: 0.5vw;
  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;

export const Square = styled.div`
  height: 22vh;
  width: 100%;
  background-color: #810034;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 10em;
    fill: var(--white);
  }
  @media screen and (max-width: 500px) {
    & > svg {
      font-size: 5em;
    }
  }
`;
