import React from 'react';
import './App.css';
import Me from './components/Me.js';
import Bar from './components/Bar.js';
import Main from './components/Main.js';

function App() {
  return (
    <div>
      <div className="flex w-full">
        <div>
          <Bar />
        </div>
        <div className="flex">
          <div className="w-1/3">
            <Me />
          </div>
          <div className="w-2/3">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;