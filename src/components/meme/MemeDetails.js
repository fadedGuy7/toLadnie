import React from 'react';
import Meme from './Meme';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import Comments from './Comments'


const MemeDetails = (props) => {
    const { meme, auth, comments, id} = props;
    console.log('MemeDetails RENDER');
    console.log('meme details :', meme, id)

    if (!auth.uid) return <Redirect to='/' />
    if (meme && comments !== undefined) {
        return(
        <div className='container section'>
            <Meme meme={meme} id={id}/> 
            <Comments id={id} comments={comments} />
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
        return {
            id: id,
            meme: meme,
            auth: state.firebase.auth,
            comments: comments
    }
}

export default compose(
    firestoreConnect((props) => [
        { collection: 'meme', orderBy: 'postDate'},
        { collection: 'meme', doc: props.match.params.id, subcollections: [{ collection: 'comments' }], storeAs: 'comments', orderBy: 'commentDate' },
    ]), connect(mapStateToProps)
)(MemeDetails); 
