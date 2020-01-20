import React from 'react';
import { Link } from 'react-router-dom';
import SignedInOpt from './SignedInOpt';
import SignedOutOpt from './SignedOutOpt';
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { auth, profile } = props; // takes state !!$
    const links = auth.uid ? <SignedInOpt profile={profile} /> : <SignedOutOpt />
    return(
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                    <Link to='/' className='brand-logo navBar'>to*Ladnie</Link>
                
                { links }

            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,  //!!$
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar);