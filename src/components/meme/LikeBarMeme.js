import React from 'react'
import { connect } from 'react-redux'


const LikeBarMeme = (props) =>{
        const { liked, disliked, data } = props;
        let likes = data.meme[props.id].likes;
        let dislikes = data.meme[props.id].dislikes;
        console.log('LikeBarMeme render')
        return(
            <div className='likeButtonsContainer'>
                {(likes && liked && liked.some(val => val === props.id)) || (likes && disliked && disliked.some(val => val === props.id)) ? ( 
                    liked.some(val => val === props.id) ? (
                        <React.Fragment>
                            <div className='likeButtons liked' onClick={() => props.likeMeme(props.id)}>
                                {likes.length}
                            </div>                                               
                            <div className='likeButtons likedDislike'>
                                {dislikes.length}
                            </div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div className='likeButtons dislikedLike'>
                                {likes.length}
                            </div>
                            <div className='likeButtons disliked' onClick={() => props.dislikeMeme(props.id)}>
                                {dislikes.length}
                            </div>
                        </React.Fragment>
                    )
                ) : (
                    <>
                    <div className='likeButtons like text' onClick={() => props.likeMeme(props.id)}>+</div>
                    <div className='likeButtons dislike text' onClick={() => props.dislikeMeme(props.id)}>-</div>
                    </>
                )}

            </div>
        );
}

const mapStateToProps = (state, props) => {
    return {
        liked: state.firebase.profile.liked,
        disliked: state.firebase.profile.disliked,
        data: state.firestore.data
    }
}

export default connect(mapStateToProps)(LikeBarMeme)
