import React, {useReducer, useContext} from 'react';
import { CounterContext } from '../../App';
// const initialState = 0;

// const reducer = (state, action) => {
//     switch(action) {
//         case 'increment': {
//             return state + 1
//         } 
//         case 'decrement': {
//             return state - 1
//         }
//         case 'reset' : {
//             return initialState
//         }
//         case 'increment_by_5' : {
//             return state + 5;
//         }
//         default: {
//             return state;
//         }
//     }
// }
const Counter = () => {
    const counterContext = useContext(CounterContext);
    // const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h3>Count : {counterContext.count}</h3>
            <button onClick={() => counterContext.dispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.dispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.dispatch('reset')}>Reset</button>
            <button onClick={() => counterContext.dispatch('increment_by_5')}>Increment by 5</button>
        </div>
    )
}

export default Counter;