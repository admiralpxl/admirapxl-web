import React from "react";
import Link from "next/link";

function Links() {
  return (
    <>
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
      <li>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </li>
      <li>
        <a href="#">RESUME</a>
      </li>
      <style jsx>{`
        li {
          width: auto;
          margin: 8px;
          list-style: none;
          font-family: var(--quick);
          font-size: var(--menu);
          font-weight: var(--light);
          text-align: center;
        }
        a {
          color: var(--white);
        }
        @media (min-width: 1100px) {
          li {
            font-size: var(--title);
          }
        }
      `}</style>
    </>
  );
}

export { Links };
