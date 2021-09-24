import React from "react";

function ContactButton(){
    return(
        <button
        className="flex-center"
        href="mailto:elenegroyoko@gmail.com">
            Hire me!
            <style jsx>{`
            button {
                width: 180px;
                height: 40px;
                font-size: 2rem;
                border-radius: 10px;
                background-color: var(--blue);
                color: var(--white);
            }
            `}</style>
        </button>
    )
}

export { ContactButton };