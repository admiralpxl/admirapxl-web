import React from "react";
import Link from "next/link";

function Home() {
  return (
    <section className="intro">
      <h1 className="title">
        Hi I´m, <br />
        Junior Carrillo <br />
        Frontend Developer
      </h1>
      <p className="sub-title">
        A self-taught programmer who is passionate about technology and
        minimalist.
      </p>
      <article className="intro-links flex-between">
        <Link href="/about">
          <a>About me</a>
        </Link>

        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </article>

      <style jsx>{`
        .intro {
          width: 100%;
          height: auto;
          display: grid;
          margin-top: 48px;
        }
        .intro-links {
          width: 230px;
          height: auto;
        }
        h1,
        p {
          margin-bottom: 16px;
        }
        a {
          width: auto;
          height: 40px;
          padding-bottom: 4px;
          color: var(--white);
          border-bottom: 2px solid var(--white);
          padding-right: 8px;
          font-size: var(--stack);
          font-weight: var(--bold);
          background-color: transparent;
          font-family: var(--merri);
        }
      `}</style>
    </section>
  );
}

export default Home;
