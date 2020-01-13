import React from 'react';

const Meme = ({ meme }) => {
    return(
        <div className='card z-depth-1'>
            <div className='grey darken-2 card-content'>
                <span className='white-text text-darken-1 card-title'>{meme.title}</span>
            
                <img src={meme.url} alt={meme.alt} />
                <p className='grey-text'></p>
            </div>
        </div>
    );
}

export default Meme;


