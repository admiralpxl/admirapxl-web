import React from "react";

function MenuButton(props) {
  return (
    <>
      <button 
      className="btn-icon flex-center"
      onClick={ props.onMenu }>
        <span aria-hidden className={ props.icon } />
      </button>
      <style jsx>{`
        .btn-icon {
          width: 50px;
          height: 50px;
          background-color: transparent;
          font-size: 4rem;
          color: var(--white);
          transition: color 0.8s ease;
        }
        .btn-icon:hover {
          color: var(--blue);
        }
      `}</style>
    </>
  );
}

export { MenuButton };
