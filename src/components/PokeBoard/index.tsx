import React from "react";
import { GrScorecard, GrTarget } from "react-icons/gr";

import { GameBoard, Label } from "./styles";

export const PokeBoard = (props: { score: number; attempts: number }) => {
  const { score, attempts } = props;
  return (
    <GameBoard>
      <Label>
        <GrScorecard />
        {`score: ${score}`}
      </Label>
      <Label>
        <GrTarget />
        {`attempts: ${attempts}`}
      </Label>
    </GameBoard>
  );
};
