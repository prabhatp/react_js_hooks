import React, { useState, useContext } from 'react'
import { CounterContext } from '../../App'
const Counter = () => {
    const counterContext = useContext(CounterContext);
    // const [count, setCount] = useState(0);
    return (
        <div>
            <h3>Count : {counterContext.count}</h3>
            <button onClick={() => counterContext.setCount(counterContext.count+1)}>Increment</button>
            <button onClick={() => counterContext.setCount(counterContext.count-1)}>Decrement</button>
            <button onClick={() => counterContext.setCount(0)}>Reset</button>
        </div>

    )
}

export default Counter