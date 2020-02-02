import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    console.log('CommentsList render');
    if(comments && comments.length > 0) {
        return(
            comments.map(comment => {
                return (
                    <Comment key={comment.id} comment={comment} commentId={comment.id}/>
                );
            })
        ); 
    } else {
        return (
            <div className='noComments'>
                Brak Komentarzy, bądź pierwszym który dorzuci swoje trzy grosze!
            </div>
        );
    }
    
}

export default CommentsList;