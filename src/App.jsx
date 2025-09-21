import { useReducer, useState } from 'react'
const counterReducer = () => {


}
function App() {
  const [counterVal, setCounterVal] = useState(0);

  //const [counterVal, counterDispatch] = useReducer(counterReducer,0);
    const handleIncerment = () => {
 setCounterVal(current => current + 1);
}
const handleDecrement = () => {
  
 setCounterVal(current => current - 1);
}
  return (
    <>
    <h1>Count: {counterVal}</h1>
    <button onClick={handleIncerment}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>

    </> 
  )
}
export default App