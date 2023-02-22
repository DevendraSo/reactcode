//import './App.css';
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { increment, decrement,incrementBy,decrementBy } from "./redux/features/counterSlice";
 function App() {
  // const [counter, setCounter] = useState(0);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {counter}
<button onClick={ () => dispatch(increment()) }>Increment</button>
<button onClick={ () => dispatch(decrement()) }>Decrement</button>
<button onClick={ () => dispatch(incrementBy(50)) }>incrementBy</button>
<button onClick={ () => dispatch(decrementBy(50)) }>decrementBy</button>
    </div>
  );
}

export default App;
