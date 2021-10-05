import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex-around">
          <li>
            <Link href="/about">
              <a>ABOUT ME</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>PORTFOLIO</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          nav {
            width: 100%;
            height: 20px;
            font-family: var(--quick);
            margin-top: 20px;
          }
          ul {
            margin: 0 auto;
          }
          figure {
            width: 60px;
            height: 60px;
          }
          a {
            font-size: var(--nav);
            font-weight: var(--bold);
            color: var(--white);
          }
        `}</style>
      </nav>
    </>
  );
}

export { Navbar };
