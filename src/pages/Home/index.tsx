import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import { Greet } from "./styles";
import { Catalog } from "../../components/Catalog";
import { useHome } from "../../hooks/useHome";

export const Home = () => {
  const { data } = useHome();

  return (
    <Fragment>
      <Helmet>
        {data.map((item, i) => (
          <link
            key={item.name + i}
            rel="preload"
            as="image"
            href={item.imgUrl}
          />
        ))}
      </Helmet>
      <Greet>
        {"Welcome to Gamestation, a website of games created by me."}
      </Greet>
      <Catalog data={data} />
    </Fragment>
  );
};
