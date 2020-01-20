import React from 'react';

const showUp = ( array ) => {
    let result = '';
    array.map((el) => {
        result += '#' + el.tag + ' '
        return result
    })
    return result;
}

const Meme = ({ meme }) => {
    return(
        <div className='meme m8 s12 transparent z-depth-1'>
            <div className='grey darken-2 white-text memeTitle'>{meme.title}</div>
            <div className='memeInfo grey darken-1 white-text text-darken2 z-depth-1'>
                <p className='info'>{meme.type}</p>
                <p className='info'>{showUp(meme.hashTag)}</p>
            </div>
            <div className='grey darken-2 memeContent'>
                
                <img src={meme.meme} alt={meme.title} className='responsive-img z-depth-0' />
                
            </div>
        </div>
    );
}

export default Meme;


