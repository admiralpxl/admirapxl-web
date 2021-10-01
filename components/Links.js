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
        <a href="https://drive.google.com/file/d/1breKWsUTXV2-gRSp_ApIbIVSklm5fSYS/view?usp=sharing">
          RESUME
        </a>
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
            font-size: 2.8rem;
          }
        }
      `}</style>
    </>
  );
}

export { Links };
