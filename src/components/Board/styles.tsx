import styled from "styled-components";

export const BoardDiv = styled.div<{ size: number }>`
  width: 40vw;
  height: 40vw;
  border: 1px solid var(--gray);
  padding: 10px;
  display: grid;
  ${(props) =>
    `grid-template-columns: repeat(${props.size}, 1fr); grid-template-rows: repeat(${props.size}, 1fr)`};
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
