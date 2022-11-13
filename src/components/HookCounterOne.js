import {useState, useEffect} from 'react';

function HookCounterOne () {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `Clicked ${count} Times`;
    });
    return(
        <>
            <h1>Hook CounterOne</h1>
            <p>{count}</p>
            <button onClick={() => setCount( prevCount => prevCount +1 )}>Counter</button>
        </>
    )
}
export default HookCounterOne;
