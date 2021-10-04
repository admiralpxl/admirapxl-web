import React from "react";
import { IconLinks } from "../components/IconLinks";
import { Titles } from "../components/Titles";
import { Paraghrap } from "../components/Paraghrap";

function About() {
  return (
    <section>
      <article>
        <Titles title="ABOUT ME" />
        <Paraghrap
          content="I got into the programming world thanks the videogame specifically on
          a GameJam was take place in 2020, I participate like an artist
          (pixelart style) ironic right but not much because that pushing me to
          explore and get more knowledge about the programming world and know
          the possibility that gives to everyone."
        />
        <Paraghrap
          content="I’ve knowledge on HTML, CSS and JAVASCRIPT, actually learning React.js
          with the Next.js Framework on my way to becoming a good frontend I
          also learn about UI and UX."
        />
        <Paraghrap
          content="Also, I like Crypto and how this is changing the world I’m constaly
          adquire knowledge about this technology."
        />
      </article>
      <article>
        <Titles title="SKILLS" />
        <p></p>
        <p></p>
        <p></p>
      </article>
      <article></article>
      <style jsx>{``}</style>
    </section>
  );
}

export default About;
