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
            postDate: new Date(),
            likes: [],
            dislikes: []
        }).then((result) => {
                dispatch({ type: 'CREATE_MEME', meme})
        }).catch((error) => {
            dispatch({ type: 'CREATE_MEME_ERROR', error})
        })
    }
}

const likeMeme = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const authId = getState().firebase.auth.uid;
        const votes = getState().firestore.data.meme[id];
        console.log(votes)

        if(votes.likes.some(val => val === authId)) {
            firestore.collection('meme').doc(id).update({
                likes : firestore.FieldValue.arrayRemove(authId)
            })
            .then(() => {
                firestore.collection('users').doc(authId).update({
                    liked : firestore.FieldValue.arrayRemove(id)
                }).then(() => {
                    dispatch({ type: 'UNLIKED', authId})
                }).catch((error) => {
                    dispatch({ type: 'UNLIKE_ERROR', error})
                })
            }).catch((error) => {
                dispatch({ type: 'UNLIKE_ERROR', error})
            })
        } else {
            firestore.collection('meme').doc(id).update({
                likes : firestore.FieldValue.arrayUnion(authId) //array update
            })
            .then(() => {
                firestore.collection('users').doc(authId).update({
                    liked : firestore.FieldValue.arrayUnion(id) //array update
                }).then(() => {
                    dispatch({ type: 'LIKED', authId})
                }).catch((error) => {
                    dispatch({ type: 'LIKE_ERROR', error})
                })
            }).catch((error) => {
                dispatch({ type: 'LIKE_ERROR', error})
            })
        } 
    } 
}
const dislikeMeme = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const authId = getState().firebase.auth.uid;
        const votes = getState().firestore.data.meme[id];

        if(votes.dislikes.some(val => val === authId)) {
            firestore.collection('meme').doc(id).update({
                dislikes : firestore.FieldValue.arrayRemove(authId)
            })
            .then(() => {
                firestore.collection('users').doc(authId).update({
                    disliked : firestore.FieldValue.arrayRemove(id) 
                }).then(() => {
                    dispatch({ type: 'UNDISLIKED', authId})
                }).catch((error) => {
                    dispatch({ type: 'UNDISLIKE_ERROR', error})
                })
            }).catch((error) => {
                dispatch({ type: 'UNDISLIKE_ERROR', error})
            })
        } else {       
            firestore.collection('meme').doc(id).update({
                dislikes : firestore.FieldValue.arrayUnion(authId) //array update
            })
            .then(() => {
                firestore.collection('users').doc(authId).update({
                    disliked : firestore.FieldValue.arrayUnion(id) //array update
                }).then(() => {
                    dispatch({ type: 'DISLIKED', authId})
                }).catch((error) => {
                    dispatch({ type: 'DISLIKE_ERROR', error})
                })
            }).catch((error) => {
                dispatch({ type: 'DISLIKE_ERROR', error})
            })
        } 
    } 
}

export { likeMeme, dislikeMeme }