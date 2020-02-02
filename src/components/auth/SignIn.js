import React, { Component } from 'react'
import { connect } from 'react-redux'
import signIn from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'


export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;  // check if is there error
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='blueGrey text'>
                    <h5 className='green-text darken-2'>Zaloguj się</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} className='nBlueText'/>  
                    </div>
                    <div className='input-field'>
                    <label htmlFor='password'>Haslo</label>
                    <input type='password' id='password' onChange={this.handleChange}  className='nBlueText'/>
                    </div>
                    <button className='btn pink lighten-3 z-depth-1'>Zaloguj</button>
                    <div className='red-text center'>
                        { authError ? <p>Zly login i/lub haslo!</p> : null }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
