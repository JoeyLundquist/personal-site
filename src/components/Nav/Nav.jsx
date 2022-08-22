import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';



export const Nav = () => {
    const dispatch = useDispatch();

    const test = useSelector(store => store.testReducer)

    console.log('This is the test reducer', test)

    return(
        <>
            This is the NavBar!!!!
        </>
    )
}