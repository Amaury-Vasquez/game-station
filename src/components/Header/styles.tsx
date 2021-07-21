import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 6vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid var(--gray);
  font-size: 1.5rem;

  & > a {
    color: var(--gray-text);
    font-weight: 500;
    font-size: 1em;
    font-style: italic;
    letter-spacing: 0.1em;
    & > svg {
      margin-left: 0.5vw;
      font-size: 1.2em;
      color: var(--red);
    }
  }
  & > span {
    color: var(--gray-text);
    font-style: italic;
    font-weight: 400;
    font-size: 0.8em;
  }

  @media screen and (max-width: 500px) {
    text-align: center;
    height: 10vh;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    font-size: 1rem;
    & > a {
      font-size: 1.2em;
    }
    & > span {
      font-size: 1em;
    }
  }
`;
