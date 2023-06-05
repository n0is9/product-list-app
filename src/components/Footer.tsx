import React from "react";
import { NavLink } from "react-router-dom";
import gitHub from "../img/gitHub.svg";
import linkedIn from "../img/linkedIn.svg";
import telegram from "../img/telegram.svg";

interface LinkItem {
    url: string;
    image: string;
    alt: string;
}

const links: LinkItem[] = [
    { url: 'https://t.me/n0is9', image: telegram, alt: 'Telegram' },
    { url: 'https://www.linkedin.com/in/artem-zakharchuk-39aa66211/', image: linkedIn, alt: 'LinkedIn' },
    { url: 'https://github.com/n0is9', image: gitHub, alt: 'GitHub' },
];

function Footer(): JSX.Element {
    return (
        <div className='bg-lime-950 py-10'>
            <ul className="flex justify-center">
                {links.map((link, index) => (
                    <li key={index} className="m-2">
                        <a href={link.url} target="_blank" rel="noreferrer">
                            <img src={link.image} alt={link.alt} />
                        </a>
                    </li>
                ))}
            </ul>
            <p className='flex justify-center text-white'>
                © 2023 developed by artem zakharchuk
            </p>
        </div>
    )
}

export default Footer;