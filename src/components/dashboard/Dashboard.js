import React, { Component } from 'react';
import MemeList from '../meme/MemeList';
import Ad from './Ad';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {
    render() {
    console.log('dashboard render');
         
         const { memes, auth } = this.props;  
         if (!auth.uid) return <Redirect to='/zaloguj' />

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
    return {
        memes: state.firestore.ordered.meme,       // (3) managing data what we sinked !!#
        auth: state.firebase.auth                   // there we have got info about user authentication is it on or off
    }       
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ {
        collection: 'meme' , orderBy: ['postDate', 'desc']// (1) sink from !!#
    },
    {
        collection: 'meme'// (1) sink from !!#
    } ])
)(Dashboard); 
 