import "./App.css"
import { useState } from "react"
function App() {
  let buttons=['Red','Green','Blue','Olive','Grey','Yellow','Pink','Purple','Lavender','White','Black']
  let [bgcolor, setbgcolor] = useState("white")
  return (
    <>
      <div className="app" style={{backgroundColor:bgcolor, color: bgcolor==="Black"? "white":"black"}}>
      <h1> Background changer </h1>
      
      <div className="buttons">
        {buttons.map((btn)=>{
          return <button key={btn} className='btn' style={{backgroundColor:btn}} onClick={()=>setbgcolor(btn)}>{btn}</button>}
        )}
      </div>
      </div>
    </>
  )
}

export default App
