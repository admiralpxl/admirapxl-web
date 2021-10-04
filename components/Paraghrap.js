import React from "react";

function Paraghrap(props) {
  return (
    <p className="paraghrap">
      {props.content}
      <style jsx>{`
        p {
          padding-bottom: 8px;
        }
      `}</style>
    </p>
  );
}

export { Paraghrap };
