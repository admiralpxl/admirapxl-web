import React from "react";

function Contact() {
  return (
    <a className="flex-center" href="mailto:elnegroyoko@gmail.com">
      Hire me!
      <style jsx>{`
        a {
          width: 150px;
          height: 40px;
          font-family: var(--merri);
          font-size: var(--contact);
          font-weight: var(--bold);
          border-radius: 10px;
          border: 2px solid var(--white);
          background-color: var(--blue);
          color: var(--white);
        }
      `}</style>
    </a>
  );
}

export { Contact };
