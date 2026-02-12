import './App.css'
import { useState } from 'react'

function App() {
  let [length, setlength]=useState(8)
  let [numberallowed, setnewberallowed]=useState(false)
  let [charallowed,setcharallowed]=useState(false)
  let [password,setpassword]=useState("")
  
  const passwordgenerator= ()=>{
    const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (let i=0; i<length; i++){
      const randomIndex=Math.floor(Math.random()* characters.length);
      password+=characters[randomIndex]
    }
  }
  return (
    <>
      <h1 className='heading'> Password Generator </h1>

    </>
  )
}

export default App
