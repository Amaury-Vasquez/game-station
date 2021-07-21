import styled from "styled-components";

export const GameBoard = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 0 auto;
  border: 1px solid var(--gray);
  width: 100%;
  height: 20vh;
  font-size: 1rem;
  padding: 20px;
  text-align: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Label = styled.span`
  color: var(--gray-text);
  margin-top: 2vh;
  display: block;
  font-size: 1em;
  font-weight: 500;
  line-height: 2em;
  & > svg {
    margin-right: 1em;
  }
`;
