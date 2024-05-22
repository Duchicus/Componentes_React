import React, { useState } from 'react'

const Counter = ({initialState, jumps}) => {
  const [Counter, setCounter] = useState(initialState)
  const increment = () => {
    setCounter(Counter + jumps)
  }
  const decrement = () => {
    setCounter(Counter - jumps)
  }
  return (
    <div>
        <button onClick={increment}>+</button>
        <span>{Counter}</span>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter