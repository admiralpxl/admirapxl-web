import React from "react";

function Footer() {
  return (
    <footer>
      <p>Desing and Code by Junior Carrillo | Copyright ©2021</p>
      <style jsx>{`
        footer {
          position: absolute;
          bottom: 12px;
          left: 12px;
        }
        p {
          width: 100%;
          max-width: 400px;
          font-size: var(--little);
          font-family: var(--quick);
        }
      `}</style>
    </footer>
  );
}

export { Footer };
