import React, { FC, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { NavLinks } from "./NavLinks";
import { Logo } from './Logo';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Logo />
      {children}
      <footer>Este es mi footer</footer>
    </>
  );
};

export default Layout;
