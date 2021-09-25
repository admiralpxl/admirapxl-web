import React from "react";

function Logo(){
    return(
        <React.Fragment>
           <figure>
            <img src="isotipo-vector.svg" alt="Logotipo"/>
            </figure>
            <h3>ADMIRALPXL</h3>
            <style jsx>{`
                figure {
                    width: 200px;
                    height: 200px;
                }
            `}</style>
        </React.Fragment>
    )
}

export { Logo };