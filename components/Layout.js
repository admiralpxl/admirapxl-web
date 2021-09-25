import React, { FC, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { NavLinks } from "./NavLinks";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavLinks />
      {children}
      <footer>Este es mi footer</footer>
    </>
  );
};

export default Layout;
