import styled from "styled-components";

export const Card = styled.div<{ cardId: number }>`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: var(--shadow);
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    height: 10vh;
    padding: 10px;
  }
`;

export const Image = styled.img<{ active: boolean }>`
  display: ${(props) => (props.active ? "block" : "none")};
  width: 100%;
  height: auto;
`;
