import React from 'react'
import { useState, useEffect } from 'react';

function Counter() {
    let [counter, setCounter] = useState(0);
    let [counter2, setCounter2] = useState(0);

    useEffect(() => {
        document.title = `clicked ${counter} times`;
        console.log('YESSS');
    }, [counter]);
    // let [counter, setCounter] = useState(0);
    // let [first_name, setFirstName] = useState('');
    // let [last_name, setLastName] = useState('');

    // let [user, setUser] = useState({first_name: '', last_name: ''});
    // function handleInput(event, key) {
    //     setUser(prevState => {
    //         return {
    //             ...prevState,
    //             [key]: event.target.value
    //         }
    //     })
    // }
    return (
        <>
        <button onClick={() => setCounter(counter+1)}>Clicked {counter} times</button>
        <button onClick={() => setCounter2(counter2+1)}>Clicked {counter2} times</button>
        {/* <div>Counter - {counter}</div>
        <button onClick={() => setCounter(counter+1)} >Increment</button> */}

        {/* <input type="text" value={first_name} onChange={(event) => setFirstName(event.target.value)} />
        <input type="text" value={last_name} onChange={(event) => setLastName(event.target.value)} />
         */}
        
        {/* <input type="text" value={user.first_name} onChange={(event) => handleInput(event, 'first_name')} />
        <input type="text" value={user.last_name} onChange={(event) => handleInput(event, 'last_name')} /> */}
        </>
    )
}

export default Counter