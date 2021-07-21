import React from "react";
import { Link } from "react-router-dom";
import { GiGamepad } from "react-icons/gi";

import { Card, Container, Image, Info, LinkButton } from "./styles";

export const GameCard = (props: {
  imgUrl: string;
  link: string;
  name: string;
}) => {
  const { imgUrl, link, name } = props;
  const GameImage = <Image src={imgUrl} alt={name} />;
  return (
    <Card>
      <Info>
        <h3> {name} </h3>
        <LinkButton>
          <Link to={link}>
            {"play"} <GiGamepad />
          </Link>
        </LinkButton>
      </Info>
      <Container>{GameImage}</Container>
    </Card>
  );
};
