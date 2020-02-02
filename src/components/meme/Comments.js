import React from 'react'
import AddComment from './AddComment'
import CommentsList from './CommentsList'

const Comments = (props) => {
    return(
        <div className='commentsContainer blueGrey darken-1 text z-depth-1'>
                <div className='commentTitle blueGrey'>Komentarze dla meme</div>
                <div className='blueGrey darken-1 m8 s12'>
                    <CommentsList comments={props.comments} />
                    <AddComment id={props.id} toComment={null} />
                </div>
        </div>
    );
}

export default Comments