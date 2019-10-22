import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Builder from './Builder';
import Library from './Library';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            ComponentLibrary
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/">Library</Link>
          <Link to="/builder">Builder</Link>
        </header>
        <div>
          <Route exact path="/" component={Library} />
          <Route exact path="/builder" component={Builder} />
        </div>
      </div>
    </Router>
  );
}

export default App;
