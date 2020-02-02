import React from 'react';
import Meme from './Meme';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import Comments from './Comments'


class MemeDetails extends React.Component {
    //shouldComponentUpdate(nextProps, nextState) {
        //return this.props.meme && this.props.comment ? false : true;
    //}
    render() {

    const { meme, auth, comments } = this.props;

    if (!auth.uid) return <Redirect to='/' />           // if not logged in redirect to login page

    if (meme && comments !== undefined) {
        return(
        <div className='container section'>
            <Meme meme={meme[0]} likes={meme[0].likes} dislikes={meme[0].dislikes} redirect={false}/> 
            <Comments id={meme[0].id} comments={comments} />
        </div>
        );
    } else {
        return (<p>Ladowanie mema</p>);
    }
}
}

const mapStateToProps = (state, props) => {
        const id = props.match.params.id;
        const ordered = state.firestore.ordered;
        const meme = ordered.meme ? ordered.meme.filter(val => val.id === id) : null;
        const comments = ordered.comments ? ordered.comments : null;
        return {
            id: id,
            meme: meme,
            auth: state.firebase.auth,
            comments: comments,
         //   votes: state.firestore.data.votes
    }
}

export default compose(
    firestoreConnect((props) => [
        { collection: 'meme', orderBy: ['postDate', 'desc']},
        { collection: 'meme', doc: props.match.params.id, subcollections: [{ collection: 'comments' }], storeAs: 'comments', orderBy: 'commentDate' },
        //{ collection: 'meme', doc: props.match.params.id, subcollections: [{ collection: 'votes' }], storeAs: 'votes'},
    ]), connect(mapStateToProps)
)(MemeDetails); 
