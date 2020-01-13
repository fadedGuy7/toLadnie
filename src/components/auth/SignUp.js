import React, { Component } from 'react'

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
        console.log(this.state);
    }
    render() {
        const {
            firstName,
            lastName,
            email,
            password,
            passwordRe } = this.state;

        const isValid = firstName === '' || lastName === '' || email === '' || password !== passwordRe;

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
                </form>
            </div>
        )
    }
}

export default SignUp;
