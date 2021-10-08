import React, { useEffect } from "react";
import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { Titles } from "../components/Titles";
import { Paragraph } from "../components/Paragraph";
import { Stack } from "../components/Stack";
import { SecondLink } from "../components/SecondLink";

function About() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    ease: "power2.in",
    duration: 1,
    opacity: 0,
    y: -30,
  });

  ScrollTrigger.defaults({
    start: "top 98%",
    toggleActions: "restart none none none",
  });

  useEffect(() => {
    gsap.from(".animation-about-title", {
      delay: 0.2,
      scrollTrigger: { trigger: ".animation-about-title" },
    });
    gsap.from(".animation-about-paraone", {
      delay: 0.4,
      scrollTrigger: { trigger: ".animation-about-paraone" },
    });
    gsap.from(".animation-about-paratwo", {
      delay: 0.6,
      scrollTrigger: { trigger: ".animation-about-paratwo" },
    });
    gsap.from(".animation-about-parathree", {
      delay: 0.8,
      scrollTrigger: { trigger: ".animation-about-parathree" },
    });
    gsap.from(".animation-about-parafour", {
      delay: 1,
      scrollTrigger: { trigger: ".animation-about-parafour" },
    });
    gsap.from(".animation-skills-title", {
      delay: 1.2,
      scrollTrigger: { trigger: ".animation-skills-title" },
    });
    gsap.from(".animation-skills-para", {
      delay: 1.4,
      scrollTrigger: { trigger: ".animation-skills-para" },
    });
    gsap.from(".animation-skills-stack", {
      delay: 1.6,
      scrollTrigger: { trigger: ".animation-skills-stack" },
    });
  }, []);

  return (
    <section className="about-me">
      <article className="about padding flex-column">
        <div className="animation-about-title">
          <Titles title="ABOUT ME" />
        </div>
        <div className="animation-about-paraone">
          <Paragraph
            content="I got into the programming world thanks the videogame specifically on
          a GameJam was take place in 2020, I participate like an artist
          (pixelart style) ironic right but not much because that pushing me to
          explore and get more knowledge about the programming world and know
          the possibility that gives to everyone."
          />
        </div>
        <div className="animation-about-paratwo">
          <Paragraph
            content="I’ve knowledge on HTML, CSS and JAVASCRIPT, actually learning React.js
          with the Next.js Framework on my way to becoming a good frontend I
          also learn about UI and UX."
          />
        </div>
        <div className="animation-about-parathree">
          <Paragraph
            content="Also, I like Crypto and how this is changing the world I’m constaly
          adquire new knowledge about technology."
          />
        </div>

        <div className="animation-about-parafour">
          <SecondLink
            url="https://drive.google.com/file/d/1breKWsUTXV2-gRSp_ApIbIVSklm5fSYS/view?usp=sharing"
            iconName="fas fa-file"
            text="Download Resume"
          />
        </div>
      </article>

      <article className="skills padding">
        <div className="animation-skills-title">
          <Titles title="SKILLS" />
        </div>
        <div className="animation-skills-para">
          <Paragraph content="I´ve proficient in HTML & CSS to build static - dynamic - interactive landing pages, knowledge-making transitions - animations on CSS and using GSAP (Javascript Library for animations) and use Gestalt UX law to improve my frontend desing. " />
        </div>
        <article>
          <div className="animation-skills-stack">
            <Stack />
          </div>
        </article>
      </article>
      <style jsx>{`
        .about-me {
          display: grid;
        }
        .about {
          align-items: start;
        }
        @media (min-width: 800px) {
          .about-me {
            grid-template-columns: 1fr 1fr;
            margin-top: 40px;
          }
          .skills {
            grid-column: 2;
            grid-row: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
