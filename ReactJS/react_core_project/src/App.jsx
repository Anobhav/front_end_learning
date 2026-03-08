import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import authService from  "./appwrite/auth"
import Service  from './appwrite/config'
import {login,logout} from "./store/authslice"
import {Header,Footer} from './components'
import './App.css'

function App() {
  const [Loading, setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  return !Loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-grey-400'>
      <div className='w-full-block'>
        <Header/>
        <main>
          <h1>hello</h1>
        </main>
        <Footer/>
      </div>
    </div>): <div>loading</div>
}

export default App
