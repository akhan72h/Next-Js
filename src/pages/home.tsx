import React, { useState } from 'react'

export default function home() {

    const [counter,setCounter] = useState<number>(0);
    

    const increment = () => {

        setCounter(counter+1);
    }
    const decrement = () => {
        setCounter(counter-1);
    }
    
  return (

  <div>{counter}

    <button  onClick={increment}> + </button>
    <button  onClick={decrement}> - </button>
    </div>
  )
}
