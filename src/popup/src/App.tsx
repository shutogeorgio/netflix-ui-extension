import React from 'react';
import logo from './netflix_logo.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="netflix-logo" />
        <p>Maxmize Wild Imagination </p>
        <a
          className="App-link"
          href="https://github.com/shutogeorgio"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Author
        </a>
      </header>
    </div>
  );
};

export default App;
