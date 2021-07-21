import styled from "styled-components";

export const GameEndMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 25vh;
  width: 20vw;
  background-color: var(--white);
  color: var(--gray-text);
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: var(--shadow);
  text-align: center;
  @media screen and (max-width: 500px) {
    width: 80vw;
    height: 35vh;
  }
`;

export const Congrats = styled.h3`
  font-size: 1.5em;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const Message = styled.span`
  font-size: 1em;
  font-style: italic;
  font-weight: 500;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const Button = styled.button`
  cursor: pointer;
  grid-row: 3;
  height: 5vh;
  font-weight: 600;
  text-transform: capitalize;
  width: 90%;
  background-color: var(--red);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin: 0 auto;
  align-self: flex-end;
  & > a {
    color: var(--white);
  }
`;
