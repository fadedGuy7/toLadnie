import React from 'react'

const Comment = (comment) => {
    return(
        <div className='comment'>
            <span>{comment.commentAuthor}</span>
            <span>{comment.commentDate}</span>
            <span>{comment.comment}</span>
        </div>
    );
}

export default Comment;