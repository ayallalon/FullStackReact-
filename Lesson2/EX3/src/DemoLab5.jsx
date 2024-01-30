// Add to the component proper inputs ( for name, age & city)
// and a "Add" button. A button click will add a new row to the
// table.

import React, { useState } from 'react'

export default function DemoLab5() {

  const [users, setUsers] = useState([
    {name: "Dana", age:20, city: "Haifa"},
    {name: "Ron", age: 22, city: "Tel Aviv"},
    {name: "Dov", age: 31, city: "Ashdod"},
    {name: "Vered", age: 19, city: "Eilat"}
  
  ])
  const [ user, setUser]   = useState({name: "", age: 0, city: ""});
  
  const addUser = () => {
    setUsers([...users, user])
  }
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
        <br/>
        <input placeholder='Name' type='text' onChange = {(item) => setUser({...user, name:item.target.value})}></input>
        <br/>
        <input placeholder='Age' type='number' onChange = {(item) => setUser({...user, age:item.target.value})}></input>
        <br/>
        <input placeholder='City' type='text' onChange = {(item) => setUser({...user, city:item.target.value})}></input>
        <br/>
        <button onClick={addUser }>Add User</button>


    </div>
  )
}


