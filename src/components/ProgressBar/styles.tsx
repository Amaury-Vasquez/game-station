import styled from "styled-components";
import { fadeIn, fadeOut } from "../../styles/animation";

export const Wrapper = styled.div<{ fadeOut: boolean }>`
  ${(props) => (props.fadeOut ? fadeOut() : "")};
  width: 25vw;
  @media screen and (max-width: 500px) {
    width: 80%;
  }
  & > * {
    margin: 0 auto;
    margin-bottom: 5vh;
  }
`;

export const Bar = styled.div<{ progress: number; end: number }>`
  ${fadeIn({ time: "1s", type: "ease-in-out" })};
  width: 100%;
  background-color: var(--white-rgba);
  border-radius: 3px;
  box-shadow: var(--light-shadow);
  display: flex;

  & > span {
    display: flex;
    height: 15px;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    background-color: var(--loading-red);
    border-radius: 3px;
    font-weight: 500;
    ${(props) => `width: ${(100 / props.end) * props.progress}%`};
    ${(props) => (props.progress === props.end ? fadeOut() : "")};
    transition: width 500ms ease-in-out;
    padding: 1em;
    color: var(--white);
  }
  @media screen and (max-width: 500px) {
    & > span {
      height: 10px;
      font-size: 8px;
    }
  }
`;
