import React, { useState } from 'react'
import AddComment from './AddComment'
import CommentsList from './CommentsList'

const Comments = (props) => {
    const [vis, setVis] = useState('');
    const _mkVis = ( id ) => {
        vis === id ? setVis('') : setVis(id);
        console.log('setVis, vis = ', vis, id)
    }
    return(
        <div className='commentsContainer blueGrey darken-1 text z-depth-1'>
                <div className='commentTitle blueGrey'>Komentarze dla meme</div>
                <div className='blueGrey darken-1 m8 s12'>
                    <CommentsList comments={props.comments} visible={vis} _mkVis={_mkVis} />
                    <AddComment id={props.id} toComment={null} visible={vis} _mkVis={_mkVis} />
                </div>
        </div>
    );
}

export default Comments 