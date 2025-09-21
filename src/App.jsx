import { useReducer } from 'react'
const counterReducer = () => {


}
function App() {

  const [counterVal, counterDispatch] = useReducer(counterReducer,0);
 const handleIncerment = () => {
  console.log("Increment Clicked");
}
const handleDecrement = () => {
  console.log("IDecrement Clicked");

}
  return (
    <>
    <h1>Count: {counterVal}</h1>
    <button onClick={handleDecrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>

    </> 
  )
}
export default App