import React, { FC, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { NavLinks } from "./NavLinks";
import { Contact } from "./Contact";
import { CustomButton } from "./CustomButton";

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      <NavLinks />
      {children}
      <footer>Este es mi footer</footer>
    </section>
  );
};

export default Layout;
