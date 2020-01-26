import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInOpt = (props) => {
    return(
        <ul className='right hide-on-med-and-down'>
            <li>
                <NavLink to='/dodaj'>Dodaj material</NavLink>
            </li>
            <li>
                <NavLink to='/' onClick={props.signOut}>Wyloguj</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating green lighten-1'>{props.profile.initials}</NavLink>
            </li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInOpt);