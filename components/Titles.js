import React from "react";

function Titles(props) {
  return (
    <h2 className="title ">
      {props.title}
      <style jsx>{`
        h2 {
          padding-bottom: 12px;
          font-family: var(--quick);
          font-weight: var(--bold);
        }
      `}</style>
    </h2>
  );
}

export { Titles };
