import React from 'react';
import Meme from './Meme';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import AddComment from './AddComment'
import CommentsList from './CommentsList';

const MemeDetails = (props) => {
    const { meme, auth, comments, id, votes} = props;   // loading from mapstateToProsps \/
    if (!auth.uid) return <Redirect to='/' />
    if (meme && comments !== undefined) {
        return(
        <div className='container section'>
            <Meme meme={meme} id={id} votes={votes}/>
            <div className='card z-depth-0 grey darken-2'>
                <span className='white-text memeTitle'>Komentarze dla meme</span>
                <div className='grey lighten-2 green-text comments'>
                    <CommentsList comments={comments} />
                    <AddComment id={id} />
                </div>

            </div>
        </div>
        );
    } else {
        return (<p>Ladowanie mema</p>);
    }
}

const mapStateToProps = (state, props) => {
        const id = props.match.params.id;
        const memes = state.firestore.data.meme;
        const meme = memes ? memes[id] : null;
        const comments = meme ? memes[id].comments : null;
        const votes = meme ? memes[id].votes : null;
        return {
            id: id,
            meme: meme,
            auth: state.firebase.auth,
            comments: comments,
            votes: votes
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        { collection: 'meme' },
        { collection: 'meme', doc: props.match.params.id, subcollections: [{ collection: 'comments' }] },
        { collection: 'meme', doc: props.match.params.id, subcollections: [{ collection: 'votes', doc: 'likes' }] },

    ])
)(MemeDetails); 