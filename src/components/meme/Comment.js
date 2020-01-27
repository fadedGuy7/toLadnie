import React from 'react'
import moment from 'moment';

const Comment = ({comment}) => {

    return(
        <div className='comment card grey lighten-1'>
            <div className='toSides'>
                <span className='black-text memeTitle'>{comment.commentAuthorFirstName}</span>
                <span>{moment.unix(comment.commentDate.seconds).startOf('minute').fromNow()}</span>
            </div>
                <div className='grey lighten-1 green-text comments'>
                        <span></span>
                        <span>{comment.comment}</span>
                </div>
        </div>
    );
}

export default Comment;
