import React from "react";
import { Projects } from "../components/Projects";
import { Titles } from "../components/Titles";
import { Paragraph } from "../components/Paragraph";

function Portfolio() {
  return (
    <section className="portfolio padding">
      <Titles title="Portfolio" />
      <Paragraph content="Those projects help me to learn and improve more my frontend developer skills." />
      <section className="portfolio-projects">
        <Projects />
      </section>
    </section>
  );
}

export default Portfolio;
