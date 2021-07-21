import styled from 'styled-components';
import { fadeIn, fadeOut } from '../../styles/animation';

export const Game = styled.div`
  height: var(--content-height);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: var(--gap);
  margin-top: var(--top);
  padding: 40px;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

export const Card = styled.button<{ primary: boolean }>`
  width: 100%;
  height: 30vh;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.primary ? 'var(--red)' : 'var(--blue)'};
  & > svg {
    ${fadeIn()};
    font-size: 80px;
    color: var(--white);
  }
`;

export const WinnerDialog = styled.div<{ fade: boolean; win: boolean }>`
  ${fadeIn({ time: '1s', type: 'ease-in-out' })};
  ${(props) => (props.fade ? fadeOut() : '')};
  height: 12vh;
  width: 30vw;
  border-radius: 5px;
  background-color: var(--white);
  font-size: 1rem;
  padding: 20px;
  text-align: center;
  & > p {
    font-size: 1.5em;
    color: var(--gray-text);
  }
  & > svg {
    fill: ${(props) => (props.win ? 'var(--green)' : 'var(--red)')};
    font-size: 2em;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
    width: 90%;
    height: 15vh;
  }
`;
