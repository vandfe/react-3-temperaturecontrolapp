import React, { useState, useEffect } from 'react'
import './App.css';

const App = () => {

  const [temp, setTemp] = useState(10)
  const [tempColor, setTempColor] = useState('cold')

  const upTemp = () => {
    if(temp < 30)
      setTemp(temp+1)
    //changeColorDisplay()
  }

  const downTemp = () => {
    if(temp > 0)
      setTemp(temp-1)
    //changeColorDisplay()
  }

  useEffect(() =>{
    if(temp < 15)
      setTempColor('cold')
    else if(temp > 20)
      setTempColor('hot')
    else
      setTempColor('neutral')
  },[temp])
  

  /*
  const changeColorDisplay = () => {
    if(temp < 15)
      setTempColor('cold')
    else if(temp > 20)
      setTempColor('hot')
    else
      setTempColor('neutral')
  }
  */

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${tempColor}`} >
          {temp} C
        </div>
      </div>
      <div className='button-container'>
          <button onClick={() => upTemp()}>+</button>
          <button onClick={() => downTemp()}>-</button>
        </div>
    </div>
  )
}

export default App