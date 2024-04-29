import { useState } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
let [counter,setCounter] = useState(14)

const addvalue = () => {
  if(counter<20){
    setCounter(counter+1)
  }
  console.log(counter);
}

const Removevalue = () => {
  if(counter>0){
    setCounter(counter-1)
  }
  console.log(counter);
}

  return (
    <>
      <h1>Chai Aur React</h1>
      <h3>Counter Value {counter}</h3>
      
      <button onClick={addvalue}>Add Value{counter}</button>
      <br/>
      <button onClick={Removevalue}>Remove Value{counter}</button>
    </>
  );
}

export default App;
