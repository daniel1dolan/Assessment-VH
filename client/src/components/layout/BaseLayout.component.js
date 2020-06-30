import React from "react";
import Header from "./Header.component";
import Footer from "./Footer.component";

export default function BaseLayout(props) {
  return (
    <>
      <Header />
      <br />
      {props.children}
      <br />
      <Footer />
    </>
  );
}
