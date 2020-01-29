import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const LikeBarMeme = (props) =>{
    const { liked, votes, disliked } = props;
    console.log('likeBarMeme render for props: ', props);
    if(liked && liked.some(val => val === props.meme)) {
        if(votes) {
            return( //return if like cl4icked
                <div className='likeButtonsContainer'>
                    <div className='likeButtons liked' onClick={() => props.likeMeme(props.meme)}>{votes.likes.liked.length}</div>
                    <div className='likeButtons likedDislike'>{votes.dislikes.disliked.length}</div>
                </div>  
            );
        }
        return (
            <div className='likeButtonsContainer text'>
                 Lubisz to lubisz                                  {/* move function to the backend asap */}
            </div>
        );
    } else if (disliked && disliked.some(val => val === props.meme)) {
        if(votes) {
            return( // return after dislike meme
                <div className='likeButtonsContainer'>
                    <div className='likeButtons dislikedLike'>{votes.likes.liked.length}</div>
                    <div className='likeButtons disliked' onClick={() => props.dislikeMeme(props.meme)}>{votes.dislikes.disliked.length}</div>
                </div>  
            );
        }
        return (
            <div className='likeButtonsContainer text'>
                 Oj nie lubisz                         {/* move function to the backend asap */}
            </div>
        );
    } else {
        return(
            <div className='likeButtonsContainer'>
                <div className='likeButtons like text' onClick={() => props.likeMeme(props.meme)}>+</div>
                <div className='likeButtons dislike text' onClick={() => props.dislikeMeme(props.meme)}>-</div>
            </div>  
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        liked: state.firebase.profile.liked,
        disliked: state.firebase.profile.disliked,
        votes: state.firestore.data.votes
    }
}

//export default connect(mapStateToProps)(LikeBarMeme)

export default compose(
    firestoreConnect((props) => [
        { collection: 'meme', doc: props.meme, subcollections: [{ collection: 'votes' }], storeAs: 'votes'},
    ]), connect(mapStateToProps)
)(LikeBarMeme); 

