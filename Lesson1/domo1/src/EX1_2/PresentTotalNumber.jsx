import React from 'react'
import { useState } from 'react';
export default function PresentTotalNumber() {

    const [number, setNumber] = useState('0');
    const [totalNumber, setTotalNumber] = useState(0);

    const ADD = () => {
        // const temp = totalNumber + parseFloat(number) ;
        const temp = totalNumber + +number 
        setTotalNumber(temp);
        console.log(totalNumber);
    }

    return (
        <div>

            <input type='number' onChange={(event) => { setNumber(event.target.value) }} style={{ background: 'red' }}></input>
            <br></br>
            <button onClick={ADD} style={{ background: 'pink' }} >PRESS TO ADD</button>
            <br></br>
            <span>{totalNumber}</span>
        </div>


    )
}
