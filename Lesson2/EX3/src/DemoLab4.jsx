// Present the same data in a list as follows :
// ● Dana
// o Age : 20
// o City : Haifa
// ● Ron
// o Age : 22
// o City : Tel Aviv
// ● Dov
// o Age : 31
// o City : Ashdod
// ● Vered
// o Age : 19
// o City : Eilat


import React from 'react'
import { useState } from 'react'

export default function DemoLab4() {
    const [users, setUsers] = useState([
        { name: "Dana", age: 20, city: "Haifa" },
        { name: "Ron", age: 22, city: "Tel Aviv" },
        { name: "Dov", age: 31, city: "Ashdod" },
        { name: "Vered", age: 19, city: "Eilat" }

    ])

    return (
        <div>

            <ul>
                {
                    users.map((user, index) => <li key={index}>

                        {user.name}
                        <ul>
                            <li>{user.age}</li>
                            <li>{user.city}</li>
                        </ul>


                    </li>)}
            </ul>

        </div>
    )
}
