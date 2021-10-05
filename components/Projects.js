import React from "react";
import { SecondLink } from "./SecondLink";

function Projects() {
  return (
    <article className="project">
      <figure>
        <img
          src="https://d33wubrfki0l68.cloudfront.net/6101f5088f644325dbbcb25a/screenshot_2021-07-29-00-23-41-0000.png"
          alt="project-image"
        />
      </figure>
      <article className="flex-column">
        <h2>The Lion Song</h2>
        <p className="paragraph ">
          This is a redesign of the landing page of The Lion´s Song Game by
          Mi'pu'mi Games, I made the design on Figma, practice my knowledge of
          transform, transition, and animation property of CSS also uses Vanilla
          Javascript for made more dynamic the page, the design it is optimized
          for mobile, tablet and Desktop.
        </p>
        <div className="project-link">
          <SecondLink url="#" iconName="fas fa-database" text="Repository" />
          <SecondLink url="#" iconName="fas fa-globe" text="Web" />
        </div>
        <p className="project-tech">Technology uses</p>
        <h3>HTML | CSS | VANILLA JAVASCRIPT</h3>
      </article>
      <style jsx>{`
        .project {
          display: grid;
        }
        figure {
          width: 100%;
          max-width: 680px;
          min-height: 200px;
          max-height: 400px;
          margin-bottom: 40px;
        }
        img {
          border-radius: 10px;
        }
        h2 {
          font-size: var(--port-title);
          font-weight: var(--bold);
          font-family: var(--quick);
          margin-bottom: 16px;
        }
        p {
          margin-bottom: 16px;
        }
        .project-link {
          display: flex;
          flex-wrap: wrap;
        }
        .project-tech {
          width: 100%;
          margin-top: 8px;
          margin-bottom: 4px;
          font-size: var(--little);
          font-weight: var(--light);
        }
        h3 {
          width: 100%;
          font-size: var(--contact);
          font-weight: var(--bold);
          font-family: var(--quick);
          margin-top: 4px;
        }
      `}</style>
    </article>
  );
}

export { Projects };
