import React, { FC, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Menu } from "./Menu";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
