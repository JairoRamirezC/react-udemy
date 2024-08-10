import React, { useState } from 'react'

export const CounterApp = ({value = 10}) => {
  const [counter, setCounter] = useState(value);

  const handleClickEvent = (eventName) => {
    if(eventName === 'add'){
      setCounter(counter + 1);
    }
    if(eventName === 'subtract' && counter > 1){
      setCounter(counter - 1);
    }
    if(eventName === 'reset'){
      setCounter(value);
    }
  }

  return (
    <>
      <h1>CounterApp</h1>
      <p>{counter}</p>
      <button onClick={() => handleClickEvent('add')}>Incrementar</button>
      <button onClick={() => handleClickEvent('subtract')}>Decrementar</button>
      <button onClick={() => handleClickEvent('reset')}>Reset</button>
    </>
  )
}
