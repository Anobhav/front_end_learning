import React from "react" //used for fragments, fragement removes the outter div we need to wrap dom elements 
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  let food=[]
  //let food=['Dal','Salad','Milk','Vegetable']
  let empty_msg= food.length===0 ? <h3>error food list is empty</h3>:null
  return (
    <React.Fragment> 
      {/*also used to represent as <></>*/}
      <h1>Healthy Food</h1>
      {empty_msg}
      {food.length===0 && <h3>Error</h3>}
      <ul className="list-group">
      {food.map((i)=><li key={i} className="list-group-item">{i}</li>)}
      </ul>
    </React.Fragment>
  )
}
export default App
