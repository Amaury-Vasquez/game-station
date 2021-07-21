import styled from "styled-components";

export const GameCatalog = styled.div<{ dimension: number }>`
  height: var(--content-height);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.dimension}, 1fr);
  position: relative;
  top: 3%;
  padding: 10px;
  grid-gap: 2vw;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
