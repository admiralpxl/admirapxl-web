import React from "react";
import { Navbar } from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <style jsx>{`
        header {
          width: 100%;
          height: auto;
          padding: 12px;
          margin-bottom: 20px;
        }
      `}</style>
    </header>
  );
}

export { Header };
