const initState = { 
    memes: [
        {id: '1', title: 'Dinosaur rex - fappin unvailable :(', meme: './img/dinosaur.png', alt: 'dino1'},
        {id: '2', title: 'Dinosaur2  rex - fappin unvailable :(', meme: './img/dinosaur.png', alt: 'dino2'}

    ]
}

const memeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_MEME':
            console.log('created meme', action.meme);
            return state;
        case 'CREATE_MEME_ERROR':
            console.log('create meme error:', action.error);
            return state;
        default:
           return state;

    }
}

export default memeReducer;

