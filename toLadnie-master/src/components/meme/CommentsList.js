import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    console.log(".", comments);
        return(
            <div className='conteinte'>
                { comments && comments.map((comment) => {
                    return(
                        <Comment comment={comment} />
                    )
                })}
            </div>
        );
    
}

export default CommentsList;