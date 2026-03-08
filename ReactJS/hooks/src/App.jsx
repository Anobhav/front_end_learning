import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  let [length,setlength]=useState(8)
  let [number,setnumber]=useState(false)
  let [charset,setcharset]=useState(false)
  const[password,setpassword]=useState("")
  const passwordref=useRef(null)
  const copypasswordtoclickboard = useCallback(() => {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passGenerator =useCallback(()=>{
    let pass=""
    let alltext="qwertyuiopasdfghjklzxcvbnm"
    if(number) alltext+="1234567890"
    if(charset) alltext+=",./;'[]\|}{:?><()_+!@#$%^&*()"

    for (let index=0; index<=length;index++){
      let char = Math.floor(Math.random() * alltext.length)
      pass+=alltext.charAt(char)
      console.log(pass);
      
    }
    setpassword(pass)
  },[length,number,charset])
  useEffect(()=>{passGenerator()},[length,number,charset])
  return (
   <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder="password"
          readOnly
          ref={passwordref}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-5 shrink' onClick={copypasswordtoclickboard}>COPY</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={20} value={length} className='cursor-pointer'onChange={(e)=>{
            setlength(Number(e.target.value))
          }}/><label>length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' onChange={(e)=>{
            setnumber(e.target.checked)
          }}></input>
        </div><label>Number:{number}</label>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox'onChange={(e)=>{
            setcharset(e.target.checked)
          }}></input>
        </div><label>Character:{charset}</label>
    </div>
    </div>

   </> 

  )
}

export default App