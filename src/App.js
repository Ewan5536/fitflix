import React from 'react';
import logo from './etptlogo2_AxA_icon.ico'; //to spesify icon on page//
import './App.css';
import fit1 from './fit1.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>welcome to fitflix </h1> 
          {/* hange site text */}
        </p>
        <div>
            <img src={fit1} className='site-image' alt='site image'/>
        </div>{/*add image to site*/}
      </header>
    </div>
  );
}

export default App;
