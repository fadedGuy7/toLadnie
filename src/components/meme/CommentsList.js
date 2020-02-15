import React from 'react'
import Comment from './Comment'

const CommentsList = ({ _mkVis, visible, comments }) => {

    console.log('CommentsList render', comments, visible);

    if(comments && comments.length > 0) {
        return(
            comments.filter(comment => comment.toComment === null).map(comment => {
                return (
                    <Comment key={comment.id} comment={comment} comments={comments} visible={visible} _mkVis={_mkVis}/>
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
