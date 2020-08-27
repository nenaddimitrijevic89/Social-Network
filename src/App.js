import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import {Switch, Route} from 'react-router-dom';
import { Feed } from './components/Feed/Feed';
import { Profile } from './components/Profile/Profile';
import { UserForm } from './components/UserForm/UserForm';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={UserForm}/>
      <React.Fragment>
    <div className='page-container'>
      <div className='content'>
      <Header/>
        <Route exact path='/feed' component={Feed}/>
        <Route exact path='/profile' component={Profile}/>
      </div>
      <Footer/>
    </div>
    </React.Fragment>
    </Switch>
  );
}

export default App;
