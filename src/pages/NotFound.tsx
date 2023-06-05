import React from 'react';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='text-3xl py-10 bg-lime-100 h-screen'>
            <p className='flex justify-center font-bold text-5xl'>404</p>
            <p className='flex justify-center py-3'>Seems, there are no cats here :(</p>
            <div className='flex justify-center '>
                <NavLink className='underline md:decoration-2' to={'/'}>Click here to find your cat</NavLink>
            </div>

        </div>
    )
}

export default NotFound