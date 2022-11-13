import './App.css';
import UsersEffect from './components/useEffect/UsersEffect';
// import React, {useState, useReducer} from 'react';
// import Counter from './components/useEffect/Counter';

// import Counter from './components/useReducer/Counter';
// import Counter from './components/useState/Counter';
// import CounterTwo from './components/useState/CounterTwo';

// export const CounterContext = React.createContext();
// import ClassCounterOne from './components/ClassCounterOne';
//import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';

// const initialState = 0;
// const reducer = (state, action) =>{
//   switch(action) {
//     case 'increment': {
//       return state + 1;
//     }
//     case 'decrement': {
//       return state - 1;
//     }
//     case 'reset': {
//       return initialState;
//     }
//     case 'increment_by_5': {
//       return state + 5;
//     }
//     default: {
//       return state;
//     }
//   }
// }
function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <UsersEffect />
      {/* <Counter /> */}
      {/* <CounterContext.Provider value={{count, dispatch}}>
        <Counter />
      </CounterContext.Provider> */}
      {/* <CounterContext.Provider value={{count, setCount}}>
        <Counter />
        <CounterTwo />
      </CounterContext.Provider> */}
      
        {/* <ClassCounterOne /> */}
        {/* <HookCounter /> */}
    </div>
  );
}

export default App;