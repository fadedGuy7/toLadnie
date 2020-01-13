import React from 'react';
import { Link } from 'react-router-dom';
import SignedInOpt from './SignedInOpt';
import SignedOutOpt from './SignedOutOpt';
const NavBar = () => {
    return(
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                    <Link to='/' className='brand-logo navBar'>to*Ladnie</Link>
                
                <SignedInOpt />
                <SignedOutOpt />

            </div>
        </nav>
    );
}

export default NavBar;