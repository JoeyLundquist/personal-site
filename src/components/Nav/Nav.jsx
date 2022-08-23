import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './nav.css'


export const Nav = () => {
    const dispatch = useDispatch();

    const test = useSelector(store => store.testReducer)

    console.log('This is the test reducer', test)

    return(
        <div className='nav-bar'>
            <Link className='nav-links' to="/home">
                Home
            </Link>

            <Link to="/about-me" className='nav-links'>
                About Me
            </Link>

            <Link to="/dogs" className='nav-links'>
                Doggos
            </Link>

            <Link to="/contact-me" className='nav-links'>
                Contact
            </Link>
        </div>
    )
}