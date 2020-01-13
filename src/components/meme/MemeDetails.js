import React from 'react';
import Meme from './Meme';

const MemeDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className='container section meme-detail'>
            <Meme />
            <div className='card z-depth-0 grey darken-2'>
                <span className='white-text card-title'>Komentarze dla meme {id}</span>
                <div className='card-action grey lighten-4 green-text'>
                    Komentarz lorem ipsum
                </div>

            </div>
        </div>
    )
}

export default MemeDetails;