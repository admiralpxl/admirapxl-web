import React from "react";
import { Contact } from "../components/Contact";
import { IconLinks } from "../components/IconLinks";

function Home() {
  return (
    <section>
      <article className="home padding">
        <h2>HI</h2>
        <h2>I'm Junior</h2>
        <h2>Frontend Developer</h2>
      </article>
      <article className="home-me flex-column center padding">
        <p>
          I´m a self-taught person who starts learning about web technology &
          blockchain to improve my skills and help to build a future more
          accessible for everyone.
        </p>
        <Contact />
      </article>
      <article className="home-media">
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
      <style jsx>{`
        .home h2 {
          font-size: var(--title-home-mobile);
          font-weight: var(--bold);
          font-family: var(--quick);
          text-align: center;
          margin-bottom: 4px;
        }
        .home-me p {
          text-align: center;
          font-size: var(--normal);
          line-height: 2.4rem;
          margin-bottom: 12px;
          max-width: 620px;
        }
        .home-media {
          width: auto;
          height: 50px;
          display: flex;
          gap: 16px;
          position: absolute;
          bottom: 20px;
          right: 12px;
        }
        @media (min-width: 768px) {
          section {
            padding-left: 16%;
          }
          .home h2 {
            font-size: var(--title-home-tablet);
          }
          .home h2,
          .home-me p {
            text-align: start;
          }
          .home,
          .home-me {
            padding-top: 8px;
            padding-bottom: 8px;
            width: 620px;
          }
          .home-me {
            align-items: start;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
