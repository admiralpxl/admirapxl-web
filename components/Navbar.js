import React from "react";
import Link from 'next/link';
import { MenuButton } from './MenuButton';
import { IconLinks } from './IconLinks';

function Navbar() {

    return(
        <header>
            <nav>
                <ul>
                <li>
                    <Link href="/">
                        <figure>
                            <img src="logotipo.png" alt="logo" />
                        </figure>
                    </Link>
                </li>
                    <li>
                        <MenuButton
                            onMenu={ ()=> {
                                console.log('evento que abre el menu aqui')
                            }}
                            icon="fas fa-bars"
                        />
                    </li>
                </ul>
            </nav>
            <style jsx>{`
            header{
                width: 100%;
                height: 50px;
                font-family: var(--quick);
            }
            ul {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            figure{
                width: 225px;
                height: 50px;
                cursor: pointer;
            }
            a {
                color: var(--blue);
                font-size: 1.8rem;
            }
            `}</style>
            </header>
    );
}

export { Navbar };