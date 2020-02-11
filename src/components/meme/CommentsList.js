import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    console.log('CommentsList render');
    if(comments && comments.length > 0) {
        return(
            comments.filter(comment => comment.toComment === null).map(comment => {
                let commentTo = comments.filter(val => val.toComment === comment.id);
                return (
                    <Comment key={comment.id} comment={comment} comments={comments} commentTo={commentTo} commentId={comment.id}/>
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

/*

import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    console.log('CommentsList render');
    if(comments && comments.length > 0) {
        return(
            comments.filter(comment => comment.toComment === null).map(comment => {
                let commentTo = [];
                commentTo.push(comments.filter(val => val.toComment === comment.id));
                return (
                    <Comment key={comment.id} comment={comment} comments={commentTo} commentId={comment.id}/>
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

*/