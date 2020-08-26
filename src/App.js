import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom';
import { Feed } from './components/Feed/Feed';
import { Profile } from './components/Profile/Profile';
import { Login } from './components/Login/Login';

function App() {
  return (
    <div className='page-container'>
      <div className='content'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/feed' component={Feed}/>
        <Route exact path='/profile' component={Profile}/>
      </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
