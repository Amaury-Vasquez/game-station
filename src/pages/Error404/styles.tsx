import styled from "styled-components";

export const ErrorMessage = styled.article`
  width: 40vw;
  height: 50vh;
  border: 1px solid var(--gray);
  text-align: center;
  padding: 10px;
  line-height: 10vh;
  margin: 0 auto;
  margin-top: 10vh;
  & > svg {
    font-size: 60px;
    color: #e84545;
  }
  & > h1 {
    border-top: 10vh;
    font-size: 30px;
  }
  & > h2 {
    font-size: 1.5em;
  }
  & > button {
    width: 15vw;
    height: 5vh;
    border-radius: 5px;
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5em;
      color: blue;
      & > svg {
        margin-top: 2vh;
        margin-left: 1vw;
      }
    }
  }
`;
