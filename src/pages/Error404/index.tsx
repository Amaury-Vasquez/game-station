import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

import { MdError } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { ErrorMessage } from "./styles";

export const Error404 = () => {
  const url = useLocation();

  return (
    <Fragment>
      <Helmet>
        <title> 404 page not found </title>
      </Helmet>
      <ErrorMessage>
        <MdError />
        <h1> {"Error 404"} </h1>
        <h2> {url.pathname + " was moved or doesn't exists"} </h2>
        <button>
          <Link to="/">
            <AiOutlineHome />
          </Link>
        </button>
      </ErrorMessage>
    </Fragment>
  );
};
