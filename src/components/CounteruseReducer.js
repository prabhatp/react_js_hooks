import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

function reducer(state, action) {
    console.log('state', state);
    switch(action.type) {
        case 'increment': {
            return { count: state.count + action.payload }
        }
        case 'decrement': {
            return  { count: state.count - action.payload }
        }
    }
}

function CounteruseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    console.log('state2', state);
    console.log('dispatch', dispatch);

    return (
        <>  
            <p>Counter - {state.count} </p>
            <button onClick={() => dispatch({type: 'increment', payload: 5})}>+</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 5})}>-</button>
        </>
    )
}

export default CounteruseReducer