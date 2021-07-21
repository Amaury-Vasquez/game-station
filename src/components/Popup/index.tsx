import React from "react";

import { Loader } from "../Loader";
import { ProgressBar } from "../ProgressBar";
import { Popup as Content } from "./styles";

export const Popup = (props: {
  active: boolean;
  gameEnded: boolean;
  component: JSX.Element;
  progress?: number;
  end?: number;
}) => {
  const { active, component, end, gameEnded, progress } = props;
  return (
    <Content active={active}>
      {gameEnded ? (
        component
      ) : progress && end ? (
        <ProgressBar end={end} Loader={<Loader />} progress={progress} />
      ) : (
        <Loader />
      )}
    </Content>
  );
};
