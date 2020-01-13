import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../../store/actions/memeActions';

export class CreateMeme extends Component {
    state = {
        title: '',
        meme: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMeme(this.state)
    }

    render() {
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <div className='input-field'>
                        <label htmlFor='title'>Tytul Mema</label>
                        <input type='text' id='title' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='meme'>Zapodaj meme</label>
                        <textarea className='materialize-textarea' id='meme' onChange={this.handleChange} />
                    </div>
                    <button className='btn pink z-depth-1'>Dodaj</button>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMeme: (meme) => dispatch(createMeme(meme))
    }
}

export default connect(null, mapDispatchToProps)(CreateMeme);