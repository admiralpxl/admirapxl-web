import React from "react";
import { SecondLink } from "./SecondLink";

function Stack() {
  return (
    <section className="stack padding">
      <SecondLink url="#" iconName="fas fa-file" text="Download Resume" />
      <style jsx>{`
        .stack {
          display: flex;
        }
      `}</style>
    </section>
  );
}

export { Stack };
