import React from "react";

function CustomButton(props) {
    return(
        <button
        onClick={ props.onAction }
        >
            { props.name }
            <style jsx>{`
            button{
                width: auto;
                height: 40px;
                padding-bottom: 4px;
                color: var(--white);
                border-bottom: 2px solid var(--white);
                padding-right: 8px;
                font-size: var(--stack);
                font-weight: var(--bold);
                background-color: transparent;
                font-family: var(--merri);
            }
            `}</style>
        </button>
    )
}

export { CustomButton };