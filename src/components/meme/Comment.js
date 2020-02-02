import React from 'react'
import moment from 'moment';
import { AddComment} from './AddComment';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    render() {
        return(
            <div className='comments z-depth-1 blueGrey'>
                <div className='toSides commentTitle'>
                    <span className=''>{this.props.comment.commentAuthorFirstName}</span>
                    <span className='time'>{moment.unix(this.props.comment.commentDate.seconds).startOf('minute').fromNow()}</span>
                </div>
                <div className='toSides'>
                    <div className='blueGrey comment'>
                        <span>{this.props.comment.comment}</span>
                    </div>
                    <div className='commentExtras'>
                        <p onClick={() => { this.setState({ visible: !this.state.visible })}}>Odpowiedz</p>
                    </div>
                </div>
                <div className={this.state.visible ? 'visible' : 'invisible'}>
                    <AddComment id={this.props.id} toComment={this.props.commentId} />
                </div>
                
                {this.props.comments && this.props.comments.length > 0 ?        // check if there is comment to comment, if so display it
                    (
                    this.props.comment.comments.filter((comment) => { 
                            return comment.commentTo === this.props.commentId 
                        ? 
                            <Comment key={comment.id} comment={comment} /> 
                        : null 
                    }))
                : null }                
            </div>
        );
    }
}
    

export default Comment;
