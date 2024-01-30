import React, { useState } from 'react'

export default function Child(props) {
    const[user, setUser] = useState( {name: "", age: 0, city: "", isAdult: false});

    
    // const[userData, setUserData]=useState("");
    return (
        <div style={{ background: 'green' }}>

            Name:< onchange="setUser(" type='text'></ onchange="setUser("><br/>
            Age: < onchange="setUser(" type='number'></ onchange="setUser("><br/>
            City:
            <select>
                <option>Haifa</option>
                <option>TLV</option>
            </select><br/>
            <button onClick={props.callback}>Add</button>


        </div>
    )
}
