import React from "react";
import Link from "next/link";
import { IconLinks } from "../components/IconLinks";

function Home() {
  const [size, setSize] = React.useState("");

  const sizeScreen = () => {
    let size = screen.width;
    console.log(size);
    setSize(size);
  };
  return (
    <section className="intro" onLoad={sizeScreen}>
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
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </article>
      {size > 1100 && (
        <article className="menu-set">
          <IconLinks
            url="https://github.com/admiralpxl/"
            iconName="fab fa-github"
          />
          <IconLinks
            url="https://twitter.com/admiralpxl?s=08"
            iconName="fab fa-twitter"
          />
          <IconLinks
            url="https://www.linkedin.com/in/admiralpxl/"
            iconName="fab fa-linkedin-in"
          />
        </article>
      )}

      <style jsx>{`
        .menu-set {
          display: flex;
          gap: 8px;
          position: absolute;
          right: 10px;
          bottom: 12px;
        }
        .intro {
          width: 100%;
          height: auto;
          display: grid;
          margin-top: 20px;
          justify-content: center;
          padding: 20px;
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
          height: 32px;
          color: var(--white);
          border-bottom: 2px solid var(--white);
          padding-right: 8px;
          font-size: var(--stack);
          font-weight: var(--bold);
          background-color: transparent;
          font-family: var(--merri);
        }
        @media (min-width: 768px) {
          .intro {
            justify-content: start;
            width: 650px;
            margin-left: 10%;
          }
        }
        @media (min-width: 1100px) {
          .intro {
            margin-top: 60px;
            margin-left: 8%;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
