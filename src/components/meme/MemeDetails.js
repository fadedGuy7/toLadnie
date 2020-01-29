import React from 'react';
import Meme from './Meme';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import AddComment from './AddComment'
import CommentsList from './CommentsList'


const MemeDetails = (props) => {
    const { meme, auth, comments, id, votes} = props;   // loading from mapstateToProsps \/
    console.log('MemeDetails RENDER');

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
        const data = state.firestore.data;
        const ordered = state.firestore.ordered;
        const meme = data.meme ? data.meme[id] : null;
        const comments = ordered.comments ? ordered.comments : null;
        const votes = data.votes ? data.votes : null;
        return {
            id: id,
            meme: meme,
            auth: state.firebase.auth,
            comments: comments,
            votes: votes,
    }
}

export default compose(
    firestoreConnect((props) => [
        { collection: 'meme', orderBy: 'postDate'},
        { collection: 'meme', doc: props.match.params.id, subcollections: [{ collection: 'comments' }], storeAs: 'comments', orderBy: 'commentDate' },
        { collection: 'meme', doc: props.match.params.id, subcollections: [{ collection: 'votes' }], storeAs: 'votes'},
    ]), connect(mapStateToProps)
)(MemeDetails); 
