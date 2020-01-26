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
        }).then(() => {
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
        if(0) {
            dispatch({ type: 'LIKED_ALREADY', authId})
        } else {
            console.log('test');
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
}

export { likeMeme }