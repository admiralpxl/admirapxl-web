import React, { useState } from "react";
import Link from "next/link";
import { NavButton } from "./NavButton";
import { NavLinks } from "./NavLinks";
import { Modal } from "./Modal";

function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [size, setSize] = React.useState("");

  const sizeScreen = () => {
    let size = screen.width;
    console.log(size);
    setSize(size);
  };

  const mobileMenu = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <>
      <header onLoad={sizeScreen}>
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
                <NavButton onMenu={mobileMenu} icon="fas fa-bars" />
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
      {openMenu && <Modal className="modal" modalEvent={mobileMenu} />}
    </>
  );
}

export { Navbar };
