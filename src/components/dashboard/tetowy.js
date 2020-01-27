import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebaseConnect } from 'react-redux-firebase'

export default function Todos () {
  useFirebaseConnect([
    { path: 'todos' }
  ])
  const todos = useSelector(state => state.firebase.ordered.todos)

  return (
    <div>
      <h1>Todos</h1>
      <div>
        {JSON.stringify(todos, null, 2)}
      </div>
    </div>
  )
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
        collection: 'meme' // (1) sink from !!#
    } ])
)(Dashboard); 
 