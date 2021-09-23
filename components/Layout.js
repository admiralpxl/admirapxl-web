import React, { FC, ReactNode } from "react";
import { Navbar } from "./Navbar";

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
      <footer>Este es mi footer</footer>
    </section>
  );
};

export default Layout;
