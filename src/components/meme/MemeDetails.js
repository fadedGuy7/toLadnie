import React from 'react';
import Meme from './Meme';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import AddComment from './AddComment'
import CommentsList from './CommentsList';

const MemeDetails = (props) => {
    const { meme, auth } = props;   // pobieramy to z dolnej funkcji !!@
    if (!auth.uid) return <Redirect to='/' />

    if (meme) {
        console.log('tut', meme);
        return(
        <div className='container section'>
            <Meme meme={meme} />
            <div className='card z-depth-0 grey darken-2'>
                <span className='white-text memeTitle'>Komentarze dla meme</span>
                <div className='grey lighten-4 green-text comments'>
                    <CommentsList comments={meme.comments} />
                    <AddComment id={props.id} />
                </div>

            </div>
        </div>
        );
    } else {
        return (<p>Ladowanie mema</p>);
    }
}

const mapStateToProps = (state, props) => {  // !!@
        const id = props.match.params.id;
        const memes = state.firestore.data.meme;
        const meme = memes ? memes[id] : null;
        return {
            id: id,
            meme: meme,
            auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'meme'}
    ])
)(MemeDetails);