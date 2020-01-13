export const createMeme = (meme) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('meme').add({
            ...meme,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 1234,
            postDate: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_MEME', meme})
        }).catch((error) => {
            dispatch({ type: 'CREATE_MEME_ERROR', error})
        })
    }
}