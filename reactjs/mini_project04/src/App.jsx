import styles from "./App.module.css"
import './App.css'

let buttonnames = [1,2,'+',3,4,'-',5,6,'*',7,8,'/',9,0,'=']

function App() {
  return(
      <div className={styles.calculator}>
    <div className={styles.top}>
      <input type="text" />
      <button>C</button>
    </div>

    {buttonnames.map((button, index) => (
      <div key={index}>
      <button>{button}</button>
      </div>
    ))}

  </div>

)}

export default App
