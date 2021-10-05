import React from "react";
import { SecondLink } from "./SecondLink";

function Stack() {
  return (
    <section className="stack">
      <h2>STACK</h2>
      <SecondLink
        url="https://html.com/"
        iconName="fab fa-html5"
        text="HTML5"
      />
      <SecondLink
        url="https://www.w3.org/Style/CSS/Overview.en.html"
        iconName="fab fa-css3-alt"
        text="CSS3"
      />
      <SecondLink
        url="https://www.javascript.com/"
        iconName="fab fa-js-square"
        text="JAVASCRIPT"
      />
      <SecondLink
        url="https://reactjs.org/"
        iconName="fab fa-react"
        text="REACT"
      />
      <SecondLink
        url="https://sass-lang.com/"
        iconName="fab fa-sass"
        text="SASS"
      />
      <SecondLink
        url="https://www.figma.com/"
        iconName="fab fa-figma"
        text="FIGMA"
      />
      <style jsx>{`
        .stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        h2 {
          width: 100%;
        }
      `}</style>
    </section>
  );
}

export { Stack };
