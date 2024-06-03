import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex justify-center items-center'>
      {/* <Login/> */}
      {/* <Signup/> */}
      <Home/>
    </div>
  )
}

export default App
