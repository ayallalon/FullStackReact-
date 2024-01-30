import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoLab1 from './DemoLab1'
import DemoLab3 from './DemoLab3'
import DemoLab4 from "./DemoLab4"
import DemoLab5 from "./DemoLab5"
import Persons from './DemoLab6/Persons'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>
    <DemoLab5/>
    {/* <DemoLab4/> */}
    {/* <DemoLab5/> */}
    {/* <Persons/> */}
    </div>
    
   
  )
}

export default App
