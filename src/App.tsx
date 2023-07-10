import React, { useState } from 'react';
import './App.css';
import Views from './components/Views';
import Buttons from './components/buttons/Buttons';


function App() {
  const [totalView, setTotalView] = useState()
  const [view, setView] = useState('0');

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
    {id: 'multiply', symb: 'x'},
    {id: 'divide', symb: '/'},
    {id: 'decimal', symb: '.'}
  ]

  return (
    <div className='wrapper'>
      <Views 
      view={view} 
      setView={setView} 
      totalView={totalView} 
      setTotalView={setTotalView}
       />
      <Buttons
      view={view}
      buttons={buttons} 
      setView={setView} 
      totalView={totalView} 
      setTotalView={setTotalView}
      
      />
    </div>
  )
}

export default App;
