import React, { useState } from 'react';
import './App.css';
import Views from './components/Views';
import Buttons from './components/buttons/Buttons';


function App() {
  const [view, setView] = useState('0');
  const [decimal, setDecimal] = useState('0')

  const buttons = [
    {id: 'clear', symb: 'AC'},
    {id: 'equals', symb: '='},
    {id: 'zero', symb: '0' },
    {id: 'one', symb: '1'},
    {id: 'two', symb: '2'},
    {id: 'three', symb: '3'},
    {id: 'four', symb: '4'},
    {id: 'five', symb: '5'},
    {id: 'six', symb: '6'},
    {id: 'seven', symb: '7'},
    {id: 'eight', symb: '8'},
    {id: 'nine', symb: '9'},
    {id: 'add', symb: '+'},
    {id: 'subtract', symb: '-'},
    {id: 'multiply', symb: '*'},
    {id: 'divide', symb: '/'},
    {id: 'decimal', symb: '.'}
  ]

  return (
    <div className='wrapper'>
      <div className='calculator-container'>
      <Views 
      view={view} 
      setView={setView}
       />
      <Buttons
      view={view}
      buttons={buttons} 
      setView={setView} 
      decimal={decimal}
      setDecimal={setDecimal}
      />
      </div>
      <p>
        created by: Chenxi Lin
      </p>
    </div>
  )
}

export default App;
