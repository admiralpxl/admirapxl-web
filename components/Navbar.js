import React, { useState } from "react";
import Link from "next/link";
import { NavButton } from "./NavButton";
import { NavLinks } from "./NavLinks";
import { Menu } from "./Menu";

function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [size, setSize] = React.useState("");

  const sizeScreen = () => {
    let size = screen.width;
    setSize(size);
  };

  const mobileMenu = () => {};

  return (
    <>
      <header onChange={sizeScreen}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <figure>
                  <img src="logotipo.png" alt="logo" />
                </figure>
              </Link>
            </li>
            {size < 1100 && (
              <li>
                <NavButton
                  onMenu={() => {
                    console.log("TODO: abrir el menu");
                  }}
                  icon="fas fa-bars"
                />
              </li>
            )}

            {size > 1100 && (
              <li>
                <NavLinks />
              </li>
            )}
          </ul>
        </nav>
        <style jsx>{`
          header {
            width: 100%;
            height: auto;
            font-family: var(--quick);
            padding: 20px;
          }
          ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          figure {
            width: 225px;
            height: 50px;
            cursor: pointer;
          }
          a {
            color: var(--blue);
            font-size: 1.8rem;
          }
        `}</style>
      </header>
    </>
  );
}

export { Navbar };
