import React, { Component } from 'react';
import MemeList from '../meme/MemeList';
import Ad from './Ad';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Dashboard extends Component {
     render() {
         console.log(this.props);
         const { memes } = this.props;  // zapisujemy stala memes jako propsa z memami  
         return(
             <div className='container dashboard'>
                 <div className='row'>
                    <div className='col s12 m8'>
                        <MemeList memes={memes}/>  {/* aby przekazac ja tutaj @@ */}
                    </div>
                    <div className='col m4'>
                        <Ad />
                    </div>
                 </div>
             </div>
         );
     }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        memes: state.meme.memes       //rootReducers.js - meme => memeReducer - memes
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);