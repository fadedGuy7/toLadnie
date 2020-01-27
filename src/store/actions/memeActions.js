export const createMeme = (meme) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;  // get info about author from state
        const authId = getState().firebase.auth.uid;    // and his id
        console.log('were here', getState());
        firestore.collection('meme').add({
            ...meme,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authId,
            postDate: new Date()
        }).then((result) => {
            let id = result._key.path.segments[1];
            const like = firestore.collection('meme').doc(id).collection('votes').doc('likes').set({});
            const dislike = firestore.collection('meme').doc(id).collection('votes').doc('dislikes').set({});
            Promise.all([like, dislike]).then(() => {
                dispatch({ type: 'CREATE_MEME', meme})
            }).catch((error) => {
                dispatch({ type: 'CREATE_LIKE_DISLIKE_ERROR', error})
            })
        }).catch((error) => {
            dispatch({ type: 'CREATE_MEME_ERROR', error})
        })
    }
}

const likeMeme = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const authId = getState().firebase.auth.uid;
        /*if(() => {
        
        }) {
            dispatch({ type: 'LIKED_ALREADY', authId})
        } else { */

            firestore.collection('meme').doc(id).collection('votes').doc('likes').update({
                liked : firestore.FieldValue.arrayUnion(authId) //array update
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

const dislikeMeme = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const authId = getState().firebase.auth.uid;

            firestore.collection('meme').doc(id).collection('votes').doc('dislikes').update({
                disliked : firestore.FieldValue.arrayUnion(authId) //array update
            })
            .then(() => {
                firestore.collection('users').doc(authId).update({
                    liked : firestore.FieldValue.arrayUnion(id) //array update
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

export { likeMeme, dislikeMeme }