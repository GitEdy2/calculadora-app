import { useState } from 'react';
import './App.css';
import Pantalla from './components/Pantalla';

function App() {

  const[input, setInput] = useState('');

  

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
      </div>
    </div>
  );
}

export default App;
