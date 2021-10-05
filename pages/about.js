import React from "react";
import { Titles } from "../components/Titles";
import { Paragraph } from "../components/Paragraph";
import { Stack } from "../components/Stack";
import { SecondLink } from "../components/SecondLink";

function About() {
  return (
    <section className="about-me">
      <article className="about padding flex-column">
        <Titles title="ABOUT ME" />
        <Paragraph
          content="I got into the programming world thanks the videogame specifically on
          a GameJam was take place in 2020, I participate like an artist
          (pixelart style) ironic right but not much because that pushing me to
          explore and get more knowledge about the programming world and know
          the possibility that gives to everyone."
        />
        <Paragraph
          content="I’ve knowledge on HTML, CSS and JAVASCRIPT, actually learning React.js
          with the Next.js Framework on my way to becoming a good frontend I
          also learn about UI and UX."
        />
        <Paragraph
          content="Also, I like Crypto and how this is changing the world I’m constaly
          adquire knowledge about this technology."
        />
        <SecondLink
          url="https://drive.google.com/file/d/1breKWsUTXV2-gRSp_ApIbIVSklm5fSYS/view?usp=sharing"
          iconName="fas fa-file"
          text="Download Resume"
        />
      </article>

      <article className="skills padding">
        <Titles title="SKILLS" />
        <Paragraph content="I´ve proficient in HTML & CSS to build static - dynamic - interactive landing pages, knowledge-making transitions - animations on CSS and using GSAP (Javascript Library for animations) and use Gestalt UX law to improve my frontend desing. " />
        <article>
          <Stack />
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
