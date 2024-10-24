import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
   {/* <Counter initValue={1}/> */}
   <Login/>
    </div>
  );
}

export default App;
