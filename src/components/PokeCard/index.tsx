import React, { useState } from "react";
import { CgPokemon } from "react-icons/cg";

import { Card, Image } from "./styles";

export const PokeCard = (props: {
  url: string;
  pokeId: number;
  cardId: number;
  callback: Function;
  onLoad: Function;
}) => {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
    setActive(false);
  };
  const { cardId, callback, url, onLoad, pokeId } = props;
  return (
    <Card
      cardId={cardId}
      onClick={() => {
        if (!active && !loading) {
          callback({
            id: cardId,
            pokeId: pokeId,
            setter: setActive,
          });
        }
      }}
    >
      {active ? (
        <Image
          active={!loading}
          onLoad={() => {
            if (loading) imageLoaded();
            onLoad();
          }}
          src={url}
          alt={"Pokemon"}
        />
      ) : (
        <CgPokemon size={"100%"} />
      )}
    </Card>
  );
};
