import React, { Component } from 'react'
import { TextInput } from 'react-materialize'
import { addComment } from '../../store/actions/commentActions'
import { connect } from 'react-redux'


export class AddComment extends Component {
    state = {
        comment: '',
        memeId: this.props.id
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state)
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit} className='commentForm s12 m12 l12 xl12'>
                <TextInput onChange={this.handleChange} placeholder='HAHA Kurła dobre..' id='comment' />
                <button className='btn pink z-depth-1'>Dodaj komentarz</button>
            </form>
        ); 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => dispatch(addComment(comment))
    }
}

export default connect(null, mapDispatchToProps)(AddComment);