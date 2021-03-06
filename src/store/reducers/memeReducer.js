const initState = { 
}

const memeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_MEME':
            console.log('created meme', action.meme);
            return state;
        case 'CREATE_MEME_ERROR':
            console.log('create meme error: ', action.error);
            return state;
        case 'LIKED':
            console.log('like added: ', action);
            return state;
        case 'UNLIKED':
            console.log('unliked: ', action);
            return state; 
        case 'LIKE_ERROR':
            console.log('like error: ', action.error);
            return state;
        case 'UNLIKE_ERROR':
            console.log('like error: ', action.error);
            return state;
        case 'DISLIKED':
            console.log('dislike added: ', action);
            return state;
        case 'UNDISLIKED':
            console.log('undisliked: ', action);
            return state; 
        case 'DISLIKE_ERROR':
            console.log('dislike error: ', action.error);
            return state;
        case 'UNDISLIKE_ERROR':
                console.log('undislike error: ', action.error);
            return state;
        case 'CREATE_LIKE_DISLIKE_ERROR':
            console.log('error during creation empty like and dislike', action.error);
            return state;
        default:
           return state;

    }
}

export default memeReducer;

