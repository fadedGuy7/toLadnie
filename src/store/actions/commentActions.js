export const addComment = ( comment ) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile; // get info about user
        const authId = getState().firebase.auth.uid; // and his id
        console.log('add comment : ', comment);

        firestore.collection('meme').doc(comment.memeId).collection('comments').add({
            ...comment,
            commentAuthorUid: authId,
            commentAuthorFirstName: profile.firstName,
            commentAuthorLastName: profile.lastName,
            commentDate: new Date(),
            likes: [],
            dislikes: []
        }).then(() => {
            dispatch({ type: 'COMMENT_ADDED', comment})
        }).catch((error) => {
            dispatch({ type: 'COMMENT_ERROR', error})
        })
    }
}


export const contactsFetched = (contacts) => ({
    type: 'FETCH_CONTACTS_SUCCESS',
    contacts
  });
  