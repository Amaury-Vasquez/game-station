import React from "react";

import { GameCard } from "../GameCard";
import { GameCatalog } from "./styles";

import { CatalogCardData } from "../../interfaces/index";

export const Catalog = (props: { data: CatalogCardData[] }) => {
  return (
    <GameCatalog dimension={3}>
      {props.data.map((item, i) => (
        <GameCard
          imgUrl={item.imgUrl}
          link={item.link}
          name={item.name}
          key={i + item.name}
        />
      ))}
    </GameCatalog>
  );
};
