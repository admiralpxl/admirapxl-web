import React from "react";

function IconLinks(props) {
    return(
        <a href={ props.url }
            className="flex-center">
            <span className={ props.name }>
            </span>
            <style jsx>{`
            a {
                width: 50px;
                height: 50px;
                font-size: 3.5rem;
                background-color: var(--white);
                color: var(--black);
                transition: all 8s ease;
            }
            a:hover {
                background-color: var(--blue);
            }
            `}
            </style>
        </a>
    );
}

export { IconLinks };