import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p> Edit <code>src/App.js</code> and save to reload. </p>
                <p>React is good, Re-Frame is even better.</p>
                <p>Amazon AWS Beanstalk sure is newbie friendly!</p>
                <a className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
