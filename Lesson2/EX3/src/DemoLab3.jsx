// Create the following table with a suitable object (Name,Age,City)
// Name Age City
// Dana 20 Haifa
// Ron 22 Tel Aviv
// Dov 31 Ashdod
// Vered 19 Eilat

import React, { useState } from 'react'

export default function DemoLab3() {

  const [users, setUsers] = useState([
    {name: "Dana", age:20, city: "Haifa"},
    {name: "Ron", age: 22, city: "Tel Aviv"},
    {name: "Dov", age: 31, city: "Ashdod"},
    {name: "Vered", age: 19, city: "Eilat"}


  ])
  return (


    <div>
        <table border={1}>
          <tbody>

            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
            
            {
              users.map((user, index) => <tr key = {index}>

                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>

              </tr>)
            }
          </tbody>
         
        </table>
    </div>
  )
}


