import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

export class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRe: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const {
            firstName,
            lastName,
            email,
            password,
            passwordRe, } = this.state;

        const isValid = firstName === '' || lastName === '' || email === '' || password !== passwordRe;
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='green-text darken-2'>Rejestracja</h5>
                    <div className='input-field'>
                        <label htmlFor='firstName'>Imie</label>
                        <input type='text' id='firstName' onChange={this.handleChange} />  
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>Nazwisko</label>
                        <input type='text' id='lastName' onChange={this.handleChange} />  
                    </div>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} />  
                    </div>
                    <div className='input-field'>
                    <label htmlFor='password'>Haslo</label>
                    <input type='password' id='password' onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                    <label htmlFor='passwordRe'>Powtorz haslo</label>
                    <input type='password' id='passwordRe' onChange={this.handleChange} />
                    </div>
                    <button disabled={isValid} className='btn pink lighten-3 z-depth-1'>Zaloguj</button>
                    <div className="red-text center">
                        { authError ? <p>{ authError }</p> : null }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError       //on auth reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
