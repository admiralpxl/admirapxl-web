import React, { FC, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Links } from "./Links";
import { NavLinks } from "./NavLinks";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      <footer>Este es mi footer</footer>
    </>
  );
};

export default Layout;
