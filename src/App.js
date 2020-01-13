import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import MemeDetails from './components/meme/MemeDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateMeme from './components/meme/CreateMeme';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch >
          <Route exact path='/' component={Dashboard} />
          <Route path='/meme/:id' component={MemeDetails} /> 
          <Route path='/zaloguj' component={SignIn} />
          <Route path='/rejestracja' component={SignUp} />
          <Route path='/dodaj' component={CreateMeme} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
