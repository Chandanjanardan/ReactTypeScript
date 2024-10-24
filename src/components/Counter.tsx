// in tsx we have to define props with interface 

import React, { useState } from 'react'
interface CounterProps{
    initValue:number   // like here i am defining initvalue which is props to this comp
}
// for arrow funciton we can do one thing
// const Counter:React.FC<CounterProps>=({initValue}){}.    This say Counter is functional component that take props with value of initValue
// so this is normal way to write funciton in tsx 
function Counter({initValue}:CounterProps) {
    const [count ,setCount]=useState<number>(initValue)
    function handleIncrement(): void {
        setCount((prev) => prev + 1);
      }
    
      function handleDecrement(): void {
        setCount((prev) => prev - 1);
      }
    
      return (
        <div>
          <p data-testid="count">{count}</p>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      );
    };
    
    export default Counter;