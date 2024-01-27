import React from 'react';
import './App.css';
import Jobs from './components/Jobs.js';
import Bar from './components/Bar.js';

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Bar />
      <Jobs />
    </div>
  );
}

export default App;
