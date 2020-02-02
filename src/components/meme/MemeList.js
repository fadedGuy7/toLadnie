import React from 'react';
import Meme from './Meme';

const MemeList = ({ memes }) => {
    return (
        <div className='memeList'>
            { memes && memes.map(meme => {
                return (
                        <Meme key={meme.id} meme={meme} redirect={true}/>
                )
            }) }
        </div>
    );
}

export default MemeList;