import React from 'react'

export default function Input() {

    const sayHello = () => {
        console.log("Hello")
    }


    return (
        <div>
            <button onClick={sayHello}> Click me1 </button>
            <button onClick={() => {console.log("Hello")}}> Click me2 </button>
            <br>
            </br>
            <input onChange={(e) =>console.log(e.target.value)}></input>
            <br>
            </br>
            <select onChange={(e) => console.log(e.target.value)}>
                <option value="Haifa">Haifa</option>
                <option value="Lod">Lod</option>
            </select>
        </div>
    )
}
