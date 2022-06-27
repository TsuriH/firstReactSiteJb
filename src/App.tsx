import React from 'react';
import './App.css';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';


function App() {
  return (
    <div className='App'>
        <Header />
        <Details />
        <Skills />
    </div>
   
  );
}

export default App;
