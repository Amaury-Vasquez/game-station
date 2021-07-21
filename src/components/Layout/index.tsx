import React, { Fragment } from "react";

import { Header } from "../Header";
import { Content, Page } from "../../styles/elements";
export const Layout = (props: { children: JSX.Element }) => {
  return (
    <Fragment>
      <Header />
      <Page>
        <Content>{props.children}</Content>
      </Page>
    </Fragment>
  );
};
