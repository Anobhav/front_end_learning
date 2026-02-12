import {useState} from "react";

//let total=5

function App() {
    const [counter, setCounter ]=useState(5)
    const [err,setErr]=useState(counter)
    let addition=()=>{
        console.log('added',counter);
        if (counter<=20) {
          setCounter(counter+1)
        }
        else{
          setErr("Value cant be more than 20")
          setCounter(20)
        }
        
    }
    let subtracted=()=>{
      console.log('subtracted',counter);
        if(counter>0){
          setCounter(counter-1)
        }
        else{
          setErr("Value cant be less than 0")
          setCounter(0)
        }
        
    }
  return (
    <>


      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addition}>Add value:</button>
      <br />
      <button onClick={subtracted}>remove value:</button>
      <p>footer: {err?err:None} </p>
    </>
  )
}
export default App