// Add to it a textbox .
// - If it’s text contains less then 5 chars : It’s background will be blue
// - If it’s text contains will be 5 or more chars : It’s background will be
// Red

import React from 'react'
import { useState } from 'react';

export default function  DemoLab1() {

    const [text, setText] = useState('');
  
  return (
   
    <div>
        <input type='text' onChange={(event) => setText(event.target.value)} style={{background: text.length < 5 ? 'blue' : 'red'}}></input>
    </div>
  )
}
