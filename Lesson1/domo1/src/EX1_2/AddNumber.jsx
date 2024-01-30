import React ,{ useState } from 'react'

export default function AddNumber() {

    const [number, setNumber] = useState();
    const [totalNumber, setTotalNumber] = useState(0);



    return (
        <div>

            <input type='text' onChange={(event) => { setNumber(event.target.value) }} style={{ background: 'red' }}></input>
            <br></br>
            <button onClick={()=>{ const temp = totalNumber + number ;setTotalNumber(temp)}} style={{ background: 'pink' }} >PRESS TO ADD</button>


        </div>



    )
}
