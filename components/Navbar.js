import React from "react";
import Link from "next/link";
import { NavButton } from "./NavButton";
import { IconLinks } from "./IconLinks";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <figure>
                <img src="logotipo.png" alt="logo" />
              </figure>
            </Link>
          </li>
          <li>
            <NavButton
              onMenu={() => {
                console.log("evento que abre el menu aqui");
              }}
              icon="fas fa-bars"
            />
          </li>
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
  );
}

export { Navbar };
