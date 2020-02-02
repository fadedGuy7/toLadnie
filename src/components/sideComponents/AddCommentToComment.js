import React, { Component } from 'react'
import { TextInput } from 'react-materialize'
import { addCommentToComment } from '../../store/actions/commentActions'
import { connect } from 'react-redux'


export class AddCommentToComment extends Component {
    state = {
        comment: '',
        memeId: this.props.id,
        commentId: this.props.commentId
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCommentToComment(this.state);
        this.setState({
            comment: ''
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit} className='commentForm s12 m12 l12 xl12'>
                <TextInput onChange={this.handleChange} placeholder='A więc..' 
                           value={this.state.comment} id='comment' className='nBlueText'/>
                <button className='btn dBrown z-depth-1'>Dodaj komentarz</button>
            </form>
        ); 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCommentToComment: (comment) => dispatch(addCommentToComment(comment)),
    }
}

export default connect(null, mapDispatchToProps)(AddCommentToComment);