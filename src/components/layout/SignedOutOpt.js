import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutOpt = () => {
    return(
        <ul className='right'>
            <li>
                <NavLink className='dBrownText' to='/rejestracja'>SignUp</NavLink>
            </li>
            <li>
                <NavLink className='dBrownText' to='/zaloguj'>Login</NavLink>
            </li>
        </ul>
    );
}

export default SignedOutOpt;