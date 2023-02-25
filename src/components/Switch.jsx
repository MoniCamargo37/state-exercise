import React from 'react'
import { useState } from 'react'

const Switch = () => {

  const [darkCounter, setDarkCounter] = useState(0);
  const [lightCounter, setLightCounter] = useState(0);
  const [theme, setTheme] = useState('light');
  
  const handleLightTheme = () => {
    setLightCounter(lightCounter + 1);
    setTheme('light');
  };

  const handleDarkTheme = () =>  {
    setTheme ('dark');
    setDarkCounter(darkCounter +1);
  };
  
  return (
    <div className={`switch ${theme}`}>
    <div>
      <h4>Light theme count: {lightCounter}</h4>
      <button onClick={handleLightTheme}>Light theme</button>
    </div>
    <div>
      <h4>Dark theme count: {darkCounter}</h4>
      <button onClick={handleDarkTheme}>Dark theme</button>
    </div>
  </div>
  )
}


export default Switch;

