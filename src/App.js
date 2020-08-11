import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='page-container'>
      <div className='content'>
      <Header/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
