import {useState} from 'react';

function HookCounter() {
    const [items, setItem] = useState([]);
    function addItem() {
        setItem(
            [...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ]);
    }
    // const [user, setUser] = useState({'first_name': '', 'last_name': ''});

    /*
    const initialCount = 0;
    const [count, setCount]= useState(0);

    function incrementFive() {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    */
    return(
        <>
            <div>Hook useState</div>
            <ul>
                {items.map((item) => {
                    return (<li key={item.id}>{item.value}</li>)
                })}
            </ul>
            <button onClick={addItem}>Add Item</button>

            {/* <input type="text" name="first_name" id="first_name" placeholder="Enter First Name" value={user.first_name} onChange={(event) => setUser({...user, first_name: event.target.value})} />
            <input type="text" name="first_name" id="first_name" placeholder="Enter First Name" value={user.last_name} onChange={(event) => setUser({...user, last_name: event.target.value})} />
            <h1>Your first Name is: {user.first_name}</h1>
            <h1>Your last Name is: {user.last_name}</h1> */}

            {/* <p>{count}</p> */}
            {/* <button onClick={() => setCount(count+1)}>Counter</button> */}
            {/* <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={incrementFive}>Increment 5</button> */}
        </>
    )
}
export default HookCounter;
