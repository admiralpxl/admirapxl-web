import React from "react";
import { ProjectSlide } from "../components/ProjectSlide";

function Portfolio() {
  return (
    <>
      <section className="projects-container">
        <ProjectSlide
          number="01"
          title="INTERACTIVE PRICE SELECTOR"
          info="This is a interactive price component make with SASS and Javascript."
          web="https://price-interactive.netlify.app/"
          repo="https://github.com/admiralpxl/interactive-pricing-page"
          techno="SASS | JAVASCRIPT "
        />
        <ProjectSlide
          number="02"
          title="The Lion´s Song"
          info="This is a redesign of the landing page of The Lion´s Song Game by Mi'pu'mi Games."
          web="https://lionsonggameredesign.netlify.app/"
          repo="https://github.com/admiralpxl/lion-song-redesign"
          techno="SASS | VANILLA JAVASCRIPT "
        />
        <ProjectSlide
          number="03"
          title="Forescast Today App"
          info="A beautiful and minimalist weather app, made with pure HTML, CSS, and Vanilla Javascript."
          web="https://forescasttodayapp.netlify.app/"
          repo="https://github.com/admiralpxl/ForescastTodayApp"
          techno="API Rest | VANILLA JAVASCRIPT | DOM"
        />
      </section>
      <style jsx>
        {`
          .projects-container {
            display: flex;
            width: 100%;
            height: 75vh;
            padding: 0 10px;
            overflow-x: scroll;
            scroll-snap-type: x proximity;
            scroll-snap-align: center;
            align-items: center;
            gap: 20px;
          }
          @media (min-width: 768px) {
            div {
              display: grid;
              grid-template-rows: 400px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Portfolio;
