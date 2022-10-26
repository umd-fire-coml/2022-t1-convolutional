import React from 'react';
import InputForm from './components/InputForm';
import OutputForm from './components/OutputForm';
import './App.css';

function App() {
  return (
    <div>
      <div className = 'container'>
        <div className = 'form'>
            <InputForm/>
            <OutputForm/>
        </div>
      </div>
    </div>
  );
}

export default App;