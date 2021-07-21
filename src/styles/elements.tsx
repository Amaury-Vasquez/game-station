import styled from "styled-components";

export const Content = styled.div`
  max-height: 92vh;
  height: 92vh;
  box-sizing: border-box;
  width: var(--content-width);
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 100vw;
    padding: 10px;
    border: none;
  }
`;

export const Page = styled.div`
  width: 100vw;
  height: 94vh;
  max-height: 94vh;
  box-sizing: border-box;
`;
