import React from 'react';
import { Link } from 'react-router-dom';
import SignedInOpt from './SignedInOpt';
import SignedOutOpt from './SignedOutOpt';
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { auth, profile } = props; // takes states !!$
    const links = auth.uid ? <SignedInOpt profile={profile} /> : <SignedOutOpt />
    return(
        <nav className='nav-wrapper blueGrey'>
            <div className='container'>
                    <Link to='/' className='brand-logo text'>to*Ladnie</Link>
                
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