import React from "react";
import Link from 'next/link';

function Navbar() {

    return(
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                        <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                        <a>Portfolio</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <style jsx>{`
            nav{
                font-family: var(--quick);
            }
            a {
                color: var(--blue);
                font-size: 1.8rem;
            }
            `}</style>
            </React.Fragment>
    )
}

export { Navbar };