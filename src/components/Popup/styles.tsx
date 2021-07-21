import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Popup = styled.div<{ active: boolean }>`
  ${fadeIn({ time: "0.5s", type: "ease-in-out" })}
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
