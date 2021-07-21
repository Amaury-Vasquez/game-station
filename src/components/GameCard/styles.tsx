import styled from "styled-components";

import { fadeIn } from "../../styles/animation";

export const Card = styled.div`
  height: 25vh;
  width: 100%;
  /* border: 1px solid var(--gray); */
  /* border-style: dashed; */
  display: block;
  position: relative;
  border-radius: 5px;
  box-shadow: var(--shadow);
  &:hover {
    & > span:first-child {
      display: block;
    }
  }
`;

export const Container = styled.figure`
  height: 100%;
  width: 100%;
  margin: auto;
  text-align: center;
  box-sizing: border-box;
`;

export const Image = styled.img`
  ${fadeIn()};
  width: 100%;
  height: 100%;
  border-radius: 2px;
  cursor: pointer;
`;

export const Info = styled.span`
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-align: center;
  color: var(--white);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  & > h3 {
    position: relative;
    top: 40%;
    color: var(--white);
    text-transform: capitalize;
  }
`;

export const LinkButton = styled.div`
  margin: 0 auto;
  position: relative;
  top: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 5vh;
  background-color: var(--red);
  border-radius: 5px;
  & > a {
    text-transform: capitalize;
    color: var(--white);
    font-weight: 500;
  }
  @media screen and (max-width: 500px) {
    top: 50%;
    width: 30vw;
    height: 6vh;
  }
`;
