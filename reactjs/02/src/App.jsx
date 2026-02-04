import ButtonBtn from './btn.jsx'
import Hello from './hello.jsx'
import Random from './random.jsx'
function App() {
  return (
    <div>
      <h1>Reactjs is basically html as js</h1>
      <Hello/>
      <ButtonBtn/>
      <Random/>
      <Random/>
      <Random/>
      <Random/>
      <Random/>
    </div>
  )
}
export default App

// we  can also define a function as 
/*
export function(){
  default export 
}
  import {function } from filename

OR 

export default function (){
  exports all function 
  one default export 
}

combination of export and export default can also be used 
*/ 