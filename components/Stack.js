import React from "react";
import { IconLinks } from "../components/IconLinks";

function Stack() {
  return (
    <section className="stack center">
      <h3>STACK</h3>
      <IconLinks url="https://html.com/" iconName="fab fa-html5" />
      <IconLinks
        url="https://www.w3.org/Style/CSS/Overview.en.html"
        iconName="fab fa-css3-alt"
      />
      <IconLinks
        url="https://www.javascript.com/"
        iconName="fab fa-js-square"
      />
      <IconLinks url="https://reactjs.org/" iconName="fab fa-react" />
      <IconLinks url="https://sass-lang.com/" iconName="fab fa-sass" />

      <style jsx>{`
        .stack {
          width: 100%;
          height: auto;
          grid-gap: 8px;
          display: grid;
          grid-template-columns: 50px 50px 50px 50px 50px;
          grid-template-rows: 30px 50px;
        }
        .stack h3 {
          grid-column: 1 / 6;
          grid-row: 1;
          font-size: var(--stack);
          font-weight: var(--bold);
        }
      `}</style>
    </section>
  );
}

export { Stack };
