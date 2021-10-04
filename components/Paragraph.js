import React from "react";

function Paragraph(props) {
  return (
    <p className="paragraph">
      {props.content}
      <style jsx>{`
        p {
          padding-bottom: 24px;
        }
      `}</style>
    </p>
  );
}

export { Paragraph };
