import React from 'react';
import './App.css';
import HomePage from './UI/homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can keep your existing content or remove it */}
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <HomePage /> {/* Render your homepage component here */}
      </main>
    </div>
  );
}

export default App;