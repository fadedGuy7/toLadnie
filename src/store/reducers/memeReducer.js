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
        case 'COMMENT_ADDED':
            console.log('comment added', action);
            return state;
        case 'COMMENT_ERROR':
            console.log('comment error: ', action.error);
            return state;
        default:
           return state;

    }
}

export default memeReducer;

