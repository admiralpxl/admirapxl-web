import React from "react";
import { IconLinks } from "./IconLinks";

function ProjectSlide() {
  return (
    <article className="project flex-column center">
      <h3>01</h3>
      <h2>Forescast today app</h2>
      <p>
        The app use OpenWeather API to get the information and show it through
        DOM manipulation and using AJAX template.
      </p>
      <section className="project-links flex-around">
        <IconLinks url="#" iconName="fas fa-laptop" />
        <IconLinks url="#" iconName="far fa-hdd" />
      </section>
      <section className="project-techno">
        <h4>technology uses</h4>
        <p>HTML | CSS | VANILLA JAVASCRIPT</p>
      </section>
      <style jsx>{`
        .project {
          width: 100%;
          max-width: 400px;
          padding: 0 10px;
          height: auto;
          background: rgba(31, 31, 31, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 10px;
        }
        .project h3 {
          font-size: 10rem;
          font-family: var(--quick);
          color: var(--blue);
        }
        .project h2 {
          font-size: var(--title);
          font-weight: var(--bold);
          margin-bottom: 4px;
        }
        .project p {
          font-size: var(--little);
          line-height: 2rem;
          text-align: center;
          font-weight: var(--regular);
          margin-bottom: 12px;
        }
        .project-links {
          width: 200px;
          margin-bottom: 8px;
        }
        .project-techno {
          width: 100%;
          text-align: center;
        }
        .project-techno h4 {
          font-size: 1.4rem;
          font-weight: var(--light);
          margin-bottom: 8px;
        }
        .project-techno p {
          font-size: var(--normal);
          font-weight: var(--bold);
        }
      `}</style>
    </article>
  );
}

export { ProjectSlide };
