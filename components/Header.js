import React from "react";
import { Navbar } from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <style jsx>{`
        header {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          height: auto;
          padding: 12px;
          margin-bottom: 20px;
        }
      `}</style>
    </header>
  );
}

export { Header };
