import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../img/logo.png'

const Header = () => {
    return (
        <div className='bg-lime-900 flex justify-center p-10'>
            <NavLink to="/" className='hover:scale-105 ease-in-out duration-100'><img className='hover:scale-125 ease-in-out duration-300 w-32' src={logo} alt=""/></NavLink>
        </div>
    )
}

export default Header