const initState = {
    isLoading: false,
    error: false
}
const commentReducer = (state = initState, action) => {
    switch(action.type) {
            case 'COMMENT_ADDED':
                console.log('comment added', action.comment);
                return state;
            case 'COMMENT_ERROR':
                console.log('comment error: ', action.error);
                return state;
        default: return state;
    }
}

export default commentReducer;