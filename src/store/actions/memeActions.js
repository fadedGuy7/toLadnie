export const createMeme = (meme) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;  // get info about author from state
        const authId = getState().firebase.auth.uid;    // and his id
        firestore.collection('meme').add({
            ...meme,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authId,
            postDate: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_MEME', meme})
        }).catch((error) => {
            dispatch({ type: 'CREATE_MEME_ERROR', error})
        })
    }
}

export const addComment = (id, comment) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile; // get info about user
        const authId = getState().firebase.auth.uid; // and his id
        firestore.collection('meme').doc(id).collection('comments').add({
            commentAuthor: profile.firstName,
            comment: comment,
            commentDate: new Date()
        }).then(() => {
            dispatch({ type: 'COMMENT_ADDED', comment})
        }).catch((error) => {
            dispatch({ type: 'COMMENT_ERROR', error})
        })
    }
}