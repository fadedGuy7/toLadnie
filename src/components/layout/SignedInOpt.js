import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInOpt = () => {
    return(
        <ul className='right hide-on-med-and-down'>
            <li>
                <NavLink to='/dodaj'>Dodaj material</NavLink>
            </li>
            <li>
                <NavLink to='/'>Wyloguj</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating green lighten-1'>KK </NavLink>
            </li>
        </ul>
    );
}

export default SignedInOpt;