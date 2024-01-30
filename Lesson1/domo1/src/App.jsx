import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from "./MyComponent"
import PhonesComp from './PhonesComp'

import Input from './Input'
import PersonComp from "./EX1_1/PersonComp"
import PresentTotalNumber from "./EX1_2/PresentTotalNumber"


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <PresentTotalNumber />
    </div>


  )
}

export default App
