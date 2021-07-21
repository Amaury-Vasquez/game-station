import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";

import { HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        {"Gamestation"} <FaGamepad />
      </Link>
      <span>{"amaury.vasquezenriquez@gmail.com"}</span>
    </HeaderContainer>
  );
};
