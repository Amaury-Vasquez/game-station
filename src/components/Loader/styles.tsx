import styled, { keyframes } from "styled-components";
import { fadeIn } from "../../styles/animation";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spin = styled.div`
  ${fadeIn()};
  border: 5px solid var(--white-rgba);
  border-top: 5px solid var(--loading-red);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.4s linear infinite;
`;
