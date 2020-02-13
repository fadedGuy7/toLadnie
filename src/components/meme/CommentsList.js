import React, { useState } from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    const [vis, setVis] = useState('');
    const _mkVis = ( id ) => {
        vis === id ? setVis('') : setVis(id);
        console.log('setVis, vis = ', vis, id)
    }

    console.log('CommentsList render');

    if(comments && comments.length > 0) {
        return(
            comments.filter(comment => comment.toComment === null).map(comment => {
                return (
                    <Comment key={comment.id} comment={comment} comments={comments} visible={vis} _mkVis={_mkVis}/>
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
