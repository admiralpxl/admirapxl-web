import React from "react";
import { IconLinks } from "./IconLinks";

function SecondLink(props) {
  return (
    <article className="flex-center">
      <IconLinks url={props.url} iconName={props.iconName} />
      <a target="_blank" href={props.url}>
        {props.text}
      </a>
      <style jsx>{`
        article {
          margin: 8px;
        }
        a {
          font-size: var(--normal);
          font-family: var(--quick);
          color: var(--white);
          margin-left: 8px;
          font-weight: var(--light);
        }
      `}</style>
    </article>
  );
}

export { SecondLink };
