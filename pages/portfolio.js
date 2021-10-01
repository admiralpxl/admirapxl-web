import React from "react";
import { ProjectSlide } from "../components/ProjectSlide";

function Portfolio() {
  return (
    <div className="swiper">
      <section className="projects-container grid-center swiper-wrapper">
        <ProjectSlide />
      </section>
      <style jsx>
        {`
          .projects-container {
            width: 100%;
            height: 70vh;
            padding: 0 10px;
          }
          @media (min-width: 768px) {
            div {
              display: grid;
              grid-template-rows: 400px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Portfolio;
