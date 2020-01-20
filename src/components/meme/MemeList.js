import React from 'react';
import Meme from './Meme';
import { Link } from 'react-router-dom'

const MemeList = ({ memes }) => {
    return (
        <div className='memeList'>
            { memes && memes.map(meme => {
                return (
                    
                    <Link to={'/meme/' + meme.id} key={'link' + meme.id}>
                        <Meme key={meme.id} meme={meme} />
                    </Link>
                )
            }) }
        </div>
    );
}

export default MemeList;