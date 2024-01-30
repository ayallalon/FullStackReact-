import React, { useState } from 'react'

// Create a component called PersonComp with the following structure :
// - A span tag that shows the person’s name
// - A span tag that shows the person’s age
// The initial data is been set in the useState
// Every click on “Swap” will swap the values on the html

export default function PersonComp() {

    const [name, setName] = useState("Ayala");
    const [age, setAge] = useState("23");
    const [temp, setTemp] = useState("");

 
    const Swap = () => {

        // setTemp(name);
        // setName(age);
        // setAge(temp);

        const temp = name;
        setName(age);
        setAge(temp);

    }


    return (
        <div>

            <span>{name}</span> <br></br>
            <span>{age}</span><br></br>
            <button onClick={Swap}>Swap</button>
        </div>
    )
}
