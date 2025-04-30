import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  
  const addValue=()=>{
    if(counter<20)
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    setCounter((previousCoun)=>previousCoun+1);
    setCounter((previousCoun)=>previousCoun+1);
    setCounter((previousCoun)=>previousCoun+1);
  }
  const RemoveValue=()=>{
    if(counter>0)
    counter-=1;
    setCounter(counter);
  }
  return (
    <>
    <h1>Chai With React</h1>
    <h3>counter Value : {counter}</h3>
    <button onClick={addValue}>Add Value :{counter} </button><br/>
    <br/>
    <button onClick={RemoveValue}>Remove Value: {counter}</button>
    <footer>footer{counter}</footer>
    </>
  )
}

export default App
