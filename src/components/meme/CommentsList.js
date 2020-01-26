import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    if(comments) {
        const entries = Object.entries(comments);
        return (
            entries.map(val => {
                return (
                    <Comment key={val[0]} comment={val[1]} />
                    
                );
            })
        );
    } else {
        return (
            <p>Brak Komentarzy, bądź pierwszym który dorzuci swoje trzy grosze!</p>
        );
    }
    
}

export default CommentsList;