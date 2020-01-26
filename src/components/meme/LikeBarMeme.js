import React from 'react'
import { connect } from 'react-redux'

const LikeBarMeme = (props) =>{
    const { liked, votes } = props;
    if(liked && liked.some(val => val === props.meme)) {
        console.log('ostateczny', votes);
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
    return {
        liked: state.firebase.profile.liked,
    }
}

export default connect(mapStateToProps)(LikeBarMeme)
