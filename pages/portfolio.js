import React from "react";
import { Projects } from "../components/Projects";
import { ProjectsTwo } from "../components/ProjectsTwo";
import { Titles } from "../components/Titles";
import { Paragraph } from "../components/Paragraph";

function Portfolio() {
  return (
    <section className="portfolio padding">
      <Titles title="Portfolio" />
      <Paragraph content="Those projects help me to learn and improve more my frontend developer skills." />
      <section className="portfolio-projects">
        <div className="grid-one">
          <Projects
            image="https://d33wubrfki0l68.cloudfront.net/6101f5088f644325dbbcb25a/screenshot_2021-07-29-00-23-41-0000.png"
            title="The Lion´s Song"
            content="This is a redesign of the landing page of The Lion´s Song Game by Mi'pu'mi Games, I made the design on Figma, practice my knowledge of transform, transition, and animation property of CSS also uses Vanilla Javascript for made more dynamic the page, the design it is optimized for mobile, tablet and Desktop."
            urlRepo="https://github.com/admiralpxl/lion-song-redesign"
            urlWeb="https://lionsonggameredesign.netlify.app/"
            techno="SASS | CSS | VANILLA JAVASCRIPT"
          />
        </div>
        <div className="grid-two">
          <ProjectsTwo
            image="https://d33wubrfki0l68.cloudfront.net/611194b1dce5780008b8329e/screenshot_2021-08-09-20-48-53-0000.png"
            title="Forescast Today App"
            content="A beautiful and minimalist weather app, made with pure HTML, CSS, and Vanilla Javascript, the app use OpenWeather API to get the information and show it through DOM manipulation and using AJAX template."
            urlRepo="https://github.com/admiralpxl/ForescastTodayApp"
            urlWeb="https://forescasttodayapp.netlify.app/"
            techno="Vanilla Javascript | DOM | API Rest"
          />
        </div>
        <div className="grid-three">
          <Projects
            image="https://d33wubrfki0l68.cloudfront.net/60a17f064fde3d000776fcf7/screenshot_2021-05-16-20-22-35-0000.png"
            title="INTERACTIVE PRICE SELECTOR"
            content="This is a interactive price component make with SASS and Javascript, I also practice array and manipule DOM elements like the input range and check boxs."
            urlRepo="https://github.com/admiralpxl/interactive-pricing-page"
            urlWeb="https://price-interactive.netlify.app/"
            techno="SASS | CSS | JAVASCRIPT"
          />
        </div>
      </section>
      <style jsx>{`
        @media (min-width: 768px) {
          .portfolio-projects {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 56px 1fr 56px 1fr;
            grid-gap: 24px;
          }
          .grid-one {
            grid-column: 1;
          }
          .grid-two {
            grid-column: 2;
            grid-row: 2;
          }
          .grid-three {
            grid-column: 1;
            grid-row: 3;
          }
        }
        @media (min-width: 1040px) {
          .portfolio-projects {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
          }
          .grid-one {
            grid-column: 1;
            grid-row: 1;
          }
          .grid-two {
            grid-column: 1;
            grid-row: 2;
          }
          .grid-three {
            grid-column: 1;
            grid-row: 3;
          }
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
