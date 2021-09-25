import React from "react";

function Logo() {
  return (
    <article className="flex-column center">
      <figure>
        <img src="isotipo-vector.svg" alt="Logotipo" />
      </figure>
      <h3>ADMIRALPXL</h3>
      <style jsx>{`
        section {
          width: 100%;
          height: auto;
        }
        figure {
          width: 100px;
          height: 100px;
          margin-bottom: 12px;
        }
        h3 {
          font-family: var(--merri);
          font-size: var(--logo-font);
          font-weight: var(--bold);
        }
        @media (min-width: 768px) {
          figure {
            width: 150px;
            height: 150px;
          }
          h3 {
            font-size: var(--menu);
          }
        }
      `}</style>
    </article>
  );
}

export { Logo };
