import React from "react";
import Link from "next/link";
import { Contact } from './Contact';

function NavLinks() {
    return(
        <ul className="flex-between">
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
                <Link href="/about">
                    <a>ABOUT ME</a>
                </Link>
            </li>
            <li>
                    <a href="#">RESUME</a>
            </li>
            <li>
                <Contact />
            </li>
            <style jsx>{`
                ul {
                    max-width: 600px;
                    height: 50px;
                    font-family: var(--quick);
                    font-size: var(--stack);
                    font-weight: var(--light);
                }
                li {
                    margin: 8px 0;
                }
                a {
                    color: var(--white);
                }
            `}</style>
        </ul>
    );
}

export { NavLinks };