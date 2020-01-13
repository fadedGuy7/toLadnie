import React, { Component } from 'react'

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
        console.log(this.state);
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='green-text darken-2'>Sign In</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} />  
                    </div>
                    <div className='input-field'>
                    <label htmlFor='password'>Haslo</label>
                    <input type='password' id='password' onChange={this.handleChange} />
                    </div>
                    <button className='btn pink lighten-3 z-depth-1'>Zaloguj</button>
                </form>
            </div>
        )
    }
}

export default SignIn;
