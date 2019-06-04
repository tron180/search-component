import React from 'react';
import Search from './Search';
import states from './Data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search searchOnKey="name" dataList={states} />
    </div>
  );
}

export default App;
