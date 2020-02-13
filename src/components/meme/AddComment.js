import React from 'react'
import { TextInput } from 'react-materialize'
import { addComment } from '../../store/actions/commentActions'
import { connect } from 'react-redux'


export class AddComment extends React.Component {
    state = {
        comment: '',
        memeId: this.props.id,
        toComment: this.props.toComment
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state);
        this.setState({
            comment: ''
        })
        this.props._mkVis('');
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className='commentForm s12 m12'>
                <TextInput onChange={this.handleChange} placeholder='HAHA Kurła dobre..' 
                           value={this.state.comment} id='comment' className='nBlueText'/>
                <button className='btn dBrown z-depth-1'>Dodaj komentarz</button>
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