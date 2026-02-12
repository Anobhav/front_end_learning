import { useState } from "react"

function App() {
  let [counter, setcounter]=useState(15)
  let [limit, setlimit]=useState("")
  function addvalue() {
    if (counter<20)
    {
      setcounter(counter+1)
      setlimit("")
    }          
    else{
      setlimit("invalid value")
    }
  }
  function subvalue() {
    if (counter>0){
      setcounter(counter-1)
      setlimit("")
    } 
    else{
      setlimit("invalid value")
      
    }
  }
  return (
      <>
        <h3>  Counter = {counter} </h3>
        <h4>{limit}</h4>
        <button onClick={addvalue}> Add Value </button>
        <br/>
        <button onClick={subvalue}> Sub Value</button>
      </>
  )
}

export default App
