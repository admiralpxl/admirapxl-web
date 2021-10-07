import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Contact } from "../components/Contact";
import { IconLinks } from "../components/IconLinks";

function Home() {
  const boxRef = useRef();
  const q = gsap.utils.selector(boxRef);
  const tl = gsap.timeline({ defaults: { duration: 1 } });

  useEffect(() => {
    tl.from(".title-animation", { y: -50, stagger: 0.33, opacity: 0 })
      .from(".paragraph-animation", { opacity: 0 })
      .from(".contact", { opacity: 0 }, "-=.8")
      .from(".icon-animation", { opacity: 0, stagger: 0.4 }, "-=1");
  }, []);

  return (
    <section ref={boxRef}>
      <article className="home padding">
        <h2 className="title-animation">HI</h2>
        <h2 className="title-animation">I'm Junior</h2>
        <h2 className="title-animation">Frontend Developer</h2>
      </article>
      <article className="home-me flex-column center padding">
        <p className="paragraph-animation">
          I´m a self-taught person who starts learning about web technology &
          blockchain to improve my skills and help to build a future more
          accessible for everyone.
        </p>
        <div className="contact">
          <Contact />
        </div>
      </article>
      <article className="home-media">
        <div className="icon-animation">
          <IconLinks
            url="https://github.com/admiralpxl/"
            iconName="fab fa-github"
          />
        </div>
        <div className="icon-animation">
          <IconLinks
            url="https://twitter.com/admiralpxl?s=08"
            iconName="fab fa-twitter"
          />
        </div>
        <div className="icon-animation">
          <IconLinks
            url="https://www.linkedin.com/in/admiralpxl/"
            iconName="fab fa-linkedin-in"
          />
        </div>
      </article>
      <style jsx>{`
        .home {
          padding-bottom: 0px;
        }
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
          width: 194px;
          height: 50px;
          display: flex;
          gap: 16px;
          justify-content: space-around;
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
