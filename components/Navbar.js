import React from "react";
import Link from 'next/link';
import { MenuButton } from './MenuButton';
import { IconLinks } from './IconLinks';

function Navbar() {
    const url = "https://lh3.googleusercontent.com/b7VtxgzXBgMDn4OUthllpyhvhPuBdAPOWqzz6eHIAZmrqhiFFmKlM_SFLGkT9y6cFHJvSrabDKYRlWuHPeQRb-wU9TQFUpMvd4sGRuW1yK4Oc02yfbPMmFVCUrrZUNcqjiCKBfessadQJIPiN3ZVpgAZaPxpI2VibhRURxyYeLT2x02fsbeD2QBtjkiABOgGi6sfNCl7_vsauGVkHralBhGtCvcu_QM0Z22i1rS-Dure8aDa7Pjrp380xvJC-oV-K0-MwHL6hH9jdFNhMZ5ZfMd9-lsj7QY9gGFyZDvFqtahV6wqBPiwFfxp4BJoNutMIJmSM23R9nPS-RISGCpAi_2j2EezVqEIg8HIUGc5k_l0Xe9aUw9GICS_CTF_FkStruXDKYasGQGFyEc5EC1ZsY8idlBVG47gu0Nw3uncNlRb17DYlDlyRMQ0BcsWE6gBYXTZ-Eym1FD1ZnhiZZNEdCf8ktDveJhskKhDGzCoIQkXQC-Imb5qXDKcVz1IttzvI31NGHTuESjwUZbZjDPVZdNIUcwvIvGEoRlfRbxlRnjde5elIc1U7Iw1ry-Cp5wBS548jSFjOnWtMjFiX7jfBW3VlvL1iJVAbSYMCDc5Hp435_x8uPbR7RJG1XW-yYuW52gDirHiB4q_i-fCHoxWlJcSRj8ztFOFpANdJBcHQkI4kFyywk0v1vbQbXo-Oq_6bGbHO7lvfYxvWPYNqssI9HQ=w225-h50-no?authuser=1";

    return(
        <header>
            <nav>
                <ul>
                <li>
                    <Link href="/">
                        <figure>
                            <img src={ url } alt="logo" />
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