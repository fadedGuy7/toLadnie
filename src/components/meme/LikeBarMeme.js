import React from 'react'
import { connect } from 'react-redux'

const LikeBarMeme = (props) =>{
    const { liked, likes} = props;
    if(liked && liked.some(val => val === props.meme)) {
        console.log('votes w barze', likes);
        if(likes) {
            return(
                <div className='likeButtonsContainer'>
                    <div className='liked' onClick={() => props.likeMeme(props.meme)}>{likes.length}</div>
                    <div className='likeButtons dislike text'>-</div>
                </div>  
            );
        }
        return (
            <div className='likeButtonsContainer text'>
                 Lubisz to lubisz x                                  {/* move function to the backend asap */}
            </div>
        );
    } else {
        return(
            <div className='likeButtonsContainer'>
                <div className='likeButtons like text' onClick={() => props.likeMeme(props.meme)}>+</div>
                <div className='likeButtons dislike text'>-</div>
            </div>  
        );
    }
    
}

const mapStateToProps = (state) => {
    console.log('state w barze', state)
    return {
        liked: state.firebase.profile.liked,
        likes: state.firestore.ordered.votes
    }
}

export default connect(mapStateToProps)(LikeBarMeme)
