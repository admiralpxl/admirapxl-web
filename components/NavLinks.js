import React from "react";
import { Contact } from "./Contact";
import { Links } from "./Links";

function NavLinks() {
  return (
    <ul>
      <Links />
      <li>
        <Contact />
      </li>
      <style jsx>{`
        ul {
          display: flex;
          align-items: center;
          max-width: 800px;
          height: 50px;
        }
        li {
          margin: 8px 4px;
        }
        a {
          color: var(--white);
        }
      `}</style>
    </ul>
  );
}

export { NavLinks };
