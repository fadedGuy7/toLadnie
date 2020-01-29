import React from 'react'
import moment from 'moment';

const Comment = ({comment}) => {

    return(
        <div className='comments z-depth-1 blueGrey'>
            <div className='toSides commentTitle'>
                <span className=''>{comment.commentAuthorFirstName}</span>
                <span className='time'>{moment.unix(comment.commentDate.seconds).startOf('minute').fromNow()}</span>
            </div>
                <div className='blueGrey comment'>
                        <span>{comment.comment}</span>
                </div>
        </div>
    );
}

export default Comment;
