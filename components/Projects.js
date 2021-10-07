import React from "react";
import { SecondLink } from "./SecondLink";

function Projects(props) {
  return (
    <article className="project">
      <figure>
        <img src={props.image} alt="project-image" />
      </figure>
      <article className="flex-column project-info">
        <h2>{props.title}</h2>
        <p className="paragraph ">{props.content}</p>
        <div className="project-link">
          <SecondLink
            url={props.urlRepo}
            iconName="fas fa-database"
            text="Repository"
          />
          <SecondLink url={props.urlWeb} iconName="fas fa-globe" text="Web" />
        </div>
        <p className="project-tech">Technology uses</p>
        <h3>{props.techno}</h3>
      </article>
      <style jsx>{`
        .project {
          display: grid;
          margin-bottom: 40px;
          padding: 8px;
          gap: 12px;
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
        @media (min-width: 768px) {
          .project-link {
            width: 100%;
          }
          figure {
            min-height: 250px;
          }
        }
        @media (min-width: 1040px) {
          .project {
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }
          .project-info {
            width: 480px;
            grid-column: 1;
            grid-row: 1;
          }
          figure {
            width: 480px;
            height: 320px;
            margin: auto;
            grid-column: 2;
          }
        }
      `}</style>
    </article>
  );
}

export { Projects };
