import React from "react";
import Link from "next/link";

function NavLinks() {
    return(
        <ul>
            <li>
                <Link href="/">
                    <a>HOME</a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio">
                    <a>PORTFOLIO</a>
                </Link>
            </li>
            <li>
                    <a href="#">RESUME</a>
            </li>
            <style jsx>{`

            `}</style>
        </ul>
    );
}

export { NavLinks };