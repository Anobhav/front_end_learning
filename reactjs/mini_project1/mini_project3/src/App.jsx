
import './App.css'
import Head from './heading.jsx'
import Text from './text_data.jsx'
import DateTime from './Datetime.jsx'


function App(){
  return (
    <div>
      <div className='bharatHeading'><Head/></div>
      <div className='paragraphBody'><Text/></div>
      <div className='dateTime'><DateTime/></div>
    </div>
  )
}
export default App
